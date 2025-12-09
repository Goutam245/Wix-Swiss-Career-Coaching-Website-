import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
          <Button asChild><Link to="/">Return to Home</Link></Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
