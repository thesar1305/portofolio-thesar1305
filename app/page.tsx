const SECTIONS = ['home', 'about', 'skills', 'projects', 'faq', 'contact'];

export default function Home() {
  return (
    <>
      {SECTIONS.map((id) => (
        <section
          key={id}
          id={id}
          className='flex min-h-screen items-center justify-center border-b border-neutral-800 pt-20 text-3xl font-extrabold capitalize'
        >
          {id}
        </section>
      ))}
    </>
  );
}
