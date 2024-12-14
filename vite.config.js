import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     // ... other build options
//     rollupOptions: {
//       external: ["@babel/runtime/helpers/*"],
//     },
//   },
// });


export default defineConfig({
  plugins: [
    react({
      onwarn(warning, defaultHandler) {
        console.warn(warning); // Log the warning details
        defaultHandler(warning); // Default handling for the warning
      },
    }),
  ],
  build: {
    // ... other build options
    rollupOptions: {
      external: ["@babel/runtime/helpers/*"],
    },
  },
});