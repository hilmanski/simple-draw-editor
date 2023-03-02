export default function Sidebar() {
    return (
        <aside className="">
            <h1 className="font-semibold text-xl mb-5 mt-5">
                {' '}
                Simple Draw Editor{' '}
            </h1>
            <section>
                <p>Files/Elements</p>
            </section>

            <footer className="absolute bottom-2 text-sm">
                <p> Open source. See repo here </p>
                <p>
                    {' '}
                    Made by &nbsp;
                    <a className="underline" href="https://about.hilman.space/">
                        hilman
                    </a>{' '}
                </p>
            </footer>
        </aside>
    )
}
