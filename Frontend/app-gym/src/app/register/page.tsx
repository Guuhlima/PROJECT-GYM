import { Suspense } from "react";
import RegisterClient from "./components/RegisterClient";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <RegisterClient />
        </Suspense>
    );
}
