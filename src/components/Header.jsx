import HeaderButton from "./HeaderButton"
export default function Header() {
    return <header className='flex justify-between'>
            <p>logo</p>
            <li className="flex justify-between gap-5">
                <HeaderButton>Home</HeaderButton>
                <HeaderButton>About</HeaderButton>
                <HeaderButton>Scheduling</HeaderButton>
            </li>
        </header>
}