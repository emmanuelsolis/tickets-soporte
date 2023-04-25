import { Route, Routes } from "react-router-dom";
import UsuarioRegistro from "./UsuarioRegistro";
import Layout from "./Layout";


<Routes>
<Route path="/" element={<Layout />}>
    <Route path="/registro" element={<UsuarioRegistro />}>
        {""}
    </Route>
</Route>
</Routes>