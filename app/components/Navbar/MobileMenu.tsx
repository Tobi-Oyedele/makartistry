"use client";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex">
      {/* Menu panel */}
      <div className="w-3/4 max-w-sm bg-white p-6">
        <ul className="space-y-4">
          <li>Shop ▼</li>
          <li>Events ▼</li>
          <li>Our Story</li>
          <li>Inside Our Mind</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Blurred overlay */}
      <div onClick={onClose} className="flex-1 bg-black/30 backdrop-blur-sm" />
    </div>
  );
}
