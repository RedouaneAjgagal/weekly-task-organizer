interface Props {
    children: React.ReactNode;
    colors: string
}
const PrimaryBtn: React.FC<Props> = (props) => {
    const classes = `shadow-lg ${props.colors} font-bold w-14 h-14 flex items-center justify-center rounded-full text-3xl`

    return (
        <button className={classes}>{props.children}</button>
    )
}

export default PrimaryBtn