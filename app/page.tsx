import Spinner from "@/components/shared/Spinner";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 my-4">
        <Spinner size="xsmall" speed="fast" />
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" speed="slow" />
      </div>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>p</p>
      <code>code</code>
      <br />
      <div className="flex text-white text-center">
        <div className="bg-primary-lighter w-1/3">lighter</div>
        <div className="bg-primary w-1/3">primary</div>
        <div className="bg-primary-darker w-1/3">darker</div>
      </div>
      <div className="flex text-white text-center">
        <div className="bg-secondary-lighter w-1/3">lighter</div>
        <div className="bg-secondary w-1/3">secondary</div>
        <div className="bg-secondary-darker w-1/3">darker</div>
      </div>
      <div className="flex text-white text-center">
        <div className="bg-tertiary-lighter w-1/3">lighter</div>
        <div className="bg-tertiary w-1/3">tertiary</div>
        <div className="bg-tertiary-darker w-1/3">darker</div>
      </div>
      <div className="flex text-white text-center">
        <div className="bg-success-lighter w-1/3">lighter</div>
        <div className="bg-success w-1/3">success</div>
        <div className="bg-success-darker w-1/3">darker</div>
      </div>
      <div className="flex text-white text-center">
        <div className="bg-alert-lighter w-1/3">lighter</div>
        <div className="bg-alert w-1/3">alert</div>
        <div className="bg-alert-darker w-1/3">darker</div>
      </div>
      <div className="flex text-white text-center">
        <div className="bg-danger-lighter w-1/3">lighter</div>
        <div className="bg-danger w-1/3">danger</div>
        <div className="bg-danger-darker w-1/3">darker</div>
      </div>
      <div className="bg-white w-full text-black text-center">white</div>
      <div className="bg-black w-full text-white text-center">black</div>
    </main>
  );
};

export default Home;
