import { TopNav } from '@/components/TopNav';

export const metadata = {
  title: 'Marshall Motion Studio · 360 Viewer',
};

export default function Viewer360Page() {
  return (
    <main className="relative w-screen h-screen bg-black overflow-hidden">
      <TopNav active="viewer-360" />
      {/*
        The 360 viewer is a self-contained Three.js HTML app that lives at
        /public/360-viewer.html. Hosting it in an iframe keeps it fully
        isolated from the rest of the Next.js app — no shared state, no
        risk of side-effects on the collage view.
      */}
      <iframe
        src="/360-viewer.html"
        title="360 Viewer"
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; gyroscope; xr-spatial-tracking; fullscreen"
      />
    </main>
  );
}
