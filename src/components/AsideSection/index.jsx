export default function AsideSection() {
  return (
    <aside className="text-white bg-white hidden md:inline-block md:md:w-[50%] relative">
      <div className="absolute top-0 right-0 bg-gradient-to-r from-color-6 to-transparent w-full h-full"></div>
      <img
        className="h-full object-cover"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
    </aside>
  );
}
