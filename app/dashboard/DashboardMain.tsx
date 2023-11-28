import Card from "@/components/Card";

export default async function DashboardMain() {
  const data = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
  });

  const posts = await data.json();

  return (
    <>
      {posts.map((post: any) => (
        <Card key={post.id} title={post.title}>
          {post.body}
        </Card>
      ))}
    </>
  );
}
