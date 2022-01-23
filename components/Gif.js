export default function Gif({url}) {
    return (
        <div className="h-28 w-32 m-6">
            <img src={url} alt="gif" />
        </div>
    )
}