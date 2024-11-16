"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/ui/file-upload"; // Custom File Upload component for ShadCN UI
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // ShadCN Card components

export default function AddServiceRequest() {
  const [formData, setFormData] = useState<{
    serviceName: string;
    serviceDescription: string;
    providerID: string;
    sampleWorkLink: string;
    referenceContact: string;
    uploadedDocuments: FileList | null;
  }>({
    serviceName: "",
    serviceDescription: "",
    providerID: "",
    sampleWorkLink: "",
    referenceContact: "",
    uploadedDocuments: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (files: FileList | null) => {
    // Ensure to set uploadedDocuments only if files are not null
    setFormData((prevState) => ({
      ...prevState,
      uploadedDocuments: files,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement your submission logic here
  };

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-xl px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold mb-4">Service Request Form</CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Name */}
              <div>
                <Label htmlFor="serviceName">Service Name</Label>
                <Input 
                  type="text" 
                  id="serviceName" 
                  name="serviceName" 
                  placeholder="Enter service name" 
                  value={formData.serviceName} 
                  onChange={handleChange} 
                />
              </div>

              {/* Service Description */}
              <div>
                <Label htmlFor="serviceDescription">Service Description</Label>
                <Textarea 
                  id="serviceDescription" 
                  name="serviceDescription" 
                  placeholder="Brief description of the service" 
                  value={formData.serviceDescription} 
                  onChange={handleChange} 
                />
              </div>

              {/* Provider ID */}
              <div>
                <Label htmlFor="providerID">Provider ID (Aadhaar, PAN, etc.)</Label>
                <Input 
                  type="text" 
                  id="providerID" 
                  name="providerID" 
                  placeholder="Enter your government-issued ID" 
                  value={formData.providerID} 
                  onChange={handleChange} 
                />
              </div>

              {/* Sample Work */}
              <div>
                <Label htmlFor="sampleWorkLink">Sample Work or Portfolio Link</Label>
                <Input 
                  type="url" 
                  id="sampleWorkLink" 
                  name="sampleWorkLink" 
                  placeholder="Link to previous work or portfolio" 
                  value={formData.sampleWorkLink} 
                  onChange={handleChange} 
                />
              </div>

              {/* Reference Contact */}
              <div>
                <Label htmlFor="referenceContact">Reference Contact</Label>
                <Input 
                  type="text" 
                  id="referenceContact" 
                  name="referenceContact" 
                  placeholder="Contact of a previous client or reference" 
                  value={formData.referenceContact} 
                  onChange={handleChange} 
                />
              </div>

              {/* Document Upload */}
              <div>
                <Label htmlFor="uploadedDocuments">Supporting Documents</Label>
                <FileUpload
                  id="uploadedDocuments"
                  name="uploadedDocuments"
                  accept="application/pdf,image/*"
                  onChange={handleFileUpload} // Handles file selection
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="text-center mt-4">
            <Button type="submit" variant="default" className="w-full" onClick={handleSubmit}>
              Submit Request
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
