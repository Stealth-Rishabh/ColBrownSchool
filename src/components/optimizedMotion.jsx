// Create a slim wrapper
export const m = dynamic(() => import("framer-motion").then((mod) => mod.m), {
  ssr: false,
  loading: () => <div />,
});
