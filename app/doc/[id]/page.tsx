import Document from "@/components/Document";
import { use } from "react";

function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ unwrap the Promise
  
  return (
      // console.log(`id 2: ${id}`)
      <div className="flex flex-col flex-1 min-h-screen">
        <Document id={id} />
        
    </div>
  );
}
export default DocumentPage;