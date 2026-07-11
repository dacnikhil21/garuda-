export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-heading font-bold text-primary capitalize mb-4">
        {params.slug.replace("-", " ")}
      </h1>
      <p className="text-slate-500">Product details coming soon...</p>
    </div>
  );
}
