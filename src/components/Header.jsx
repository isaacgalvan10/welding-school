
export default function Header() {
    return <header className='flex justify-between'>
            <p>logo</p>
            <li className="flex justify-between gap-3">
                <a><ul>Home</ul></a>
                <a><ul>About</ul></a>
                <a><ul>Scheduling</ul></a>
            </li>
        </header>
}