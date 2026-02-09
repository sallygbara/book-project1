type SortBy = "title" | "author" | "favorite" | "description" | "coverImage";

type Props = {
    sortBy: SortBy;
    setSortBy: (value: SortBy) => void;
};

export default function SortBar({ sortBy, setSortBy }: Props) {
    const btn = (active: boolean) =>

        active
            ? "btnPrimary"
            : "btn";


    return (




        <><p className="choose">My Book Archive</p><div className="sortBar">
            <div className="buttons">
                <button className={btn(sortBy === "favorite")} onClick={() => setSortBy("favorite")}>
                    Favorites first
                </button>
                <button className={btn(sortBy === "title")} onClick={() => setSortBy("title")}>
                    Sort by Title
                </button>

            </div>
        </div></>
    );
}
