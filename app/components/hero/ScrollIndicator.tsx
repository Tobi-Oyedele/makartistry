import Image from "next/image";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="h-12 w-24 rounded-b-full flex justify-center">
        <Image
          src="/images/extended1.svg"
          alt="Scroll down indicator"
          width={24}
          height={12}
        />
      </div>
    </div>
  );
}
