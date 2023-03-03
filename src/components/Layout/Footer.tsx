export default function Footer() {
    return (
        <footer className="absolute bottom-2 text-sm">
            <p>
                {' '}
                Open source.
                <a
                    className="underline"
                    href="https://github.com/hilmanski/simple-draw-editor">
                    {' '}
                    See repo here{' '}
                </a>
            </p>
            <p>
                {' '}
                Made by &nbsp;
                <a className="underline" href="https://about.hilman.space/">
                    hilman
                </a>{' '}
            </p>
        </footer>
    )
}
