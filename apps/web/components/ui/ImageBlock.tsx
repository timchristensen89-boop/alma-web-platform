import Image from "next/image";

type ImageBlockProps = {
  src?: string;
  alt?: string;
  label?: string;
  height?: string;
};

export function ImageBlock({
  src,
  alt = "",
  label,
  height = "min-h-[420px]",
}: ImageBlockProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${height} bg-[#684A4A]`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      ) : (
        <div className="flex h-full items-end p-6 text-[#EFE8DC]">
          <p className="text-2xl font-semibold">{label}</p>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
}