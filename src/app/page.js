import Header from "@/components/Header";
import Home from "@/components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/assets/css/style.css";

export default function page() {
    return (
        <div className="h-full w-full">
            <Header />
            <Home />
        </div>
    );
}
