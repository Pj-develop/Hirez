import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";

export default function ProfileForm() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Update your profile</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information below to update your profile
        </p>
      </div>
      <Form className="space-y-4">{/* ... rest of your code */}</Form>
    </div>
  );
}
