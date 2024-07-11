import Button from "../ui/components/button";

export default function ContactMe() {
  return (
    <section className="p-8 mb-4">
      <form className="flex justify-center gap-2 w-full">
        <input
          type="text"
          placeholder="Insert your email"
          className="bg-transparent m-4 focus:border-2 px-2 py-1 border-primary-200 rounded-3xl w-full"
        ></input>
        <Button>Let&apos;s talk</Button>
      </form>
      {/* button (Get in touch)*/}
    </section>
  );
}
