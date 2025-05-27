import React from "react";

const Blog = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = await params;
  console.log(blogId);
  return <div>blog {blogId}</div>;
};

export default Blog;
