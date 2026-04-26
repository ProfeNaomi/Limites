/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Theory } from "./pages/Theory";
import { EpsilonDelta } from "./pages/EpsilonDelta";
import { Exercises } from "./pages/Exercises";
import { Strategies } from "./pages/Strategies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Theory />} />
          <Route path="visualize" element={<EpsilonDelta />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="strategies" element={<Strategies />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
