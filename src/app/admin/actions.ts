'use server';

import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { clearSession, createSession, verifyPassword } from '@/lib/auth';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  category: z.string().min(1, 'Category is required'),
  image: z.string().min(1, 'Image URL is required'),
  description: z.string().min(1, 'Description is required'),
  bgColor: z.string().default('bg-[#FFF9EB]'),
  pillBg: z.string().default('bg-[#FEF3C7]'),
  pillText: z.string().default('text-[#D97706]'),
  badge: z.string().default('PREMIUM QUALITY'),
});

async function handleFileUpload(file: File | null): Promise<string | null> {
  if (!file || file.size === 0) return null;
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: 'garuda' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result?.secure_url || null);
      }
    ).end(buffer);
  });
}

export async function loginAction(formData: FormData) {
  const rawUsername = formData.get('username') as string;
  const username = (rawUsername || '').trim().toLowerCase();
  const password = formData.get('password') as string;

  console.log(`Attempting login for username: "${username}"`);

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || !(await verifyPassword(password, user.password))) {
    return { error: 'Invalid credentials' };
  }

  await createSession(user.id);
  return { success: true };
}

export async function logoutAction() {
  await clearSession();
  return { success: true };
}

export async function createProductAction(formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    const rawData = {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      image: imageUrl,
      description: formData.get('description') as string,
      bgColor: formData.get('bgColor') as string,
      pillBg: formData.get('pillBg') as string,
      pillText: formData.get('pillText') as string,
      badge: formData.get('badge') as string,
    };

    const validated = productSchema.parse(rawData);
    const slug = validated.name.toLowerCase().replace(/\s+/g, '-');

    await prisma.product.create({
      data: {
        ...validated,
        slug,
      },
    });

    revalidatePath('/products');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to create product' };
  }
}

export async function updateProductAction(id: number, formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    const rawData = {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      image: imageUrl,
      description: formData.get('description') as string,
      bgColor: formData.get('bgColor') as string,
      pillBg: formData.get('pillBg') as string,
      pillText: formData.get('pillText') as string,
      badge: formData.get('badge') as string,
    };

    const validated = productSchema.parse(rawData);
    const slug = validated.name.toLowerCase().replace(/\s+/g, '-');

    await prisma.product.update({
      where: { id },
      data: {
        ...validated,
        slug,
      },
    });

    revalidatePath('/products');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update product' };
  }
}

// Category Actions

export async function createCategoryAction(formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string || null;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    const name = formData.get('name') as string;
    if (!name) return { error: 'Name is required' };
    
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    await prisma.category.create({
      data: {
        name,
        slug,
        image: imageUrl,
      },
    });

    revalidatePath('/admin/categories');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to create category' };
  }
}

export async function updateCategoryAction(id: number, formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string || null;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    const name = formData.get('name') as string;
    if (!name) return { error: 'Name is required' };
    
    const slug = name.toLowerCase().replace(/\s+/g, '-');

    await prisma.category.update({
      where: { id },
      data: {
        name,
        slug,
        image: imageUrl,
      },
    });

    revalidatePath('/admin/categories');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update category' };
  }
}

export async function deleteCategoryAction(id: number) {
  try {
    await prisma.category.delete({
      where: { id },
    });
    revalidatePath('/admin/categories');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete category' };
  }
}

// Banner Actions

export async function createBannerAction(formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    let mobileImageUrl = formData.get('mobileImage') as string || null;
    const mobileFile = formData.get('mobileImageFile') as File | null;

    if (mobileFile && mobileFile.size > 0) {
      const uploadedMobileUrl = await handleFileUpload(mobileFile);
      if (uploadedMobileUrl) mobileImageUrl = uploadedMobileUrl;
    }

    const title = formData.get('title') as string;
    if (!title || !imageUrl) return { error: 'Title and Desktop Image are required' };

    const startDateStr = formData.get('startDate') as string;
    const endDateStr = formData.get('endDate') as string;
    const startDate = startDateStr ? new Date(startDateStr) : null;
    const endDate = endDateStr ? new Date(endDateStr) : null;

    await prisma.banner.create({
      data: {
        title,
        subtitle: formData.get('subtitle') as string || null,
        image: imageUrl,
        mobileImage: mobileImageUrl,
        link: formData.get('link') as string || null,
        startDate,
        endDate,
      },
    });

    revalidatePath('/admin/banners');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to create banner' };
  }
}

export async function updateBannerAction(id: number, formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    let mobileImageUrl = formData.get('mobileImage') as string || null;
    const mobileFile = formData.get('mobileImageFile') as File | null;

    if (mobileFile && mobileFile.size > 0) {
      const uploadedMobileUrl = await handleFileUpload(mobileFile);
      if (uploadedMobileUrl) mobileImageUrl = uploadedMobileUrl;
    }

    const title = formData.get('title') as string;
    if (!title || !imageUrl) return { error: 'Title and Desktop Image are required' };

    const startDateStr = formData.get('startDate') as string;
    const endDateStr = formData.get('endDate') as string;
    const startDate = startDateStr ? new Date(startDateStr) : null;
    const endDate = endDateStr ? new Date(endDateStr) : null;

    await prisma.banner.update({
      where: { id },
      data: {
        title,
        subtitle: formData.get('subtitle') as string || null,
        image: imageUrl,
        mobileImage: mobileImageUrl,
        link: formData.get('link') as string || null,
        startDate,
        endDate,
      },
    });

    revalidatePath('/admin/banners');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update banner' };
  }
}

export async function updateBannerOrderAction(orderedIds: number[]) {
  try {
    const updates = orderedIds.map((id, index) => 
      prisma.banner.update({
        where: { id },
        data: { order: index },
      })
    );

    await prisma.$transaction(updates);

    revalidatePath('/admin/banners');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to reorder banners' };
  }
}

export async function deleteBannerAction(id: number) {
  try {
    await prisma.banner.delete({
      where: { id },
    });
    revalidatePath('/admin/banners');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete banner' };
  }
}

export async function toggleBannerStatusAction(id: number, isActive: boolean) {
  try {
    await prisma.banner.update({
      where: { id },
      data: { isActive },
    });
    revalidatePath('/admin/banners');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to toggle banner' };
  }
}

export async function deleteProductAction(id: number) {
  try {
    await prisma.product.delete({
      where: { id },
    });
    revalidatePath('/products');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete product' };
  }
}

// Gallery Actions

export async function createGalleryImageAction(formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    if (!imageUrl) return { error: 'Image is required' };

    await prisma.galleryImage.create({
      data: {
        image: imageUrl,
        alt: formData.get('alt') as string || null,
      },
    });

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to create gallery image' };
  }
}

export async function updateGalleryImageAction(id: number, formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    if (!imageUrl) return { error: 'Image is required' };

    await prisma.galleryImage.update({
      where: { id },
      data: {
        image: imageUrl,
        alt: formData.get('alt') as string || null,
      },
    });

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update gallery image' };
  }
}

export async function deleteGalleryImageAction(id: number) {
  try {
    await prisma.galleryImage.delete({
      where: { id },
    });
    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete gallery image' };
  }
}

// License Actions

export async function createLicenseAction(formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    if (!imageUrl) return { error: 'Image is required' };

    await prisma.license.create({
      data: {
        title: formData.get('title') as string || null,
        image: imageUrl,
        alt: formData.get('alt') as string || null,
      },
    });

    revalidatePath('/admin/licenses');
    revalidatePath('/licenses');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to create license' };
  }
}

export async function updateLicenseAction(id: number, formData: FormData) {
  try {
    let imageUrl = formData.get('image') as string;
    const file = formData.get('imageFile') as File | null;
    
    if (file && file.size > 0) {
      const uploadedUrl = await handleFileUpload(file);
      if (uploadedUrl) imageUrl = uploadedUrl;
    }

    if (!imageUrl) return { error: 'Image is required' };

    await prisma.license.update({
      where: { id },
      data: {
        title: formData.get('title') as string || null,
        image: imageUrl,
        alt: formData.get('alt') as string || null,
      },
    });

    revalidatePath('/admin/licenses');
    revalidatePath('/licenses');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update license' };
  }
}

export async function deleteLicenseAction(id: number) {
  try {
    await prisma.license.delete({
      where: { id },
    });
    revalidatePath('/admin/licenses');
    revalidatePath('/licenses');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete license' };
  }
}
