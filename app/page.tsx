export default function Home() {
  return (
    <main className='min-h-screen bg-black p-8 text-white'>
      <h1 className='text-5xl font-extrabold'>
        Building fast & <span className='text-primary-200'>interactive</span>{' '}
        web experiences.
      </h1>
      <p className='mt-4 max-w-md text-neutral-400'>
        Bridging creativity and functionality to deliver stunning, user-friendly
        web applications.
      </p>
      <button className='mt-8 rounded-full bg-primary-200 px-10 py-4 font-bold text-black shadow-green'>
        HIRE ME
      </button>
      <div className='mt-8 max-w-sm rounded-xl border border-neutral-800 bg-neutral-900 p-6'>
        Kartu uji: radius-xl, neutral-800, neutral-900.
      </div>
    </main>
  );
}
