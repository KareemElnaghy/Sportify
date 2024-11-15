import { PMHeader } from "@/PMs/Components/HeaderPM";
import { useMemo } from "react";
import "./HeaderStyle.css";

interface HeaderProps {
	pm: PMHeader;
	pageTitle: string;
}

interface PagesList {
	first: number[];
	middle: number[];
	last: number[];
}

export default function Header({ pm, pageTitle }: HeaderProps) {
	const pagesList = useMemo<PagesList>(() => {
		const pagesList: PagesList = {
			first: [],
			middle: [],
			last: [],
		};
		const maxCount = pm.pagesCount;
		const currentCount = pm.currentPage;

		if (maxCount < 1) {
			return pagesList;
		} else if (maxCount < 8) {
			pagesList.first = Array<number>(maxCount)
				.fill(0)
				.map((v, i) => i + 1);
		} else {
			if (currentCount < 5) {
				// merge in first, and have last
				pagesList.first = [1, 2, 3, 4, 5];
				pagesList.last = [maxCount - 1, maxCount];
			} else if (currentCount >= maxCount - 3) {
				// merge in last, and have first
				pagesList.first = [1, 2];
				pagesList.last = Array<number>(5)
					.fill(0)
					.map((v, i) => maxCount - 4 + i);
			} else {
				pagesList.first = [1, 2];
				pagesList.middle = [currentCount - 1, currentCount, currentCount + 1];
				pagesList.last = [maxCount - 1, maxCount];
			}
		}

		return pagesList;
	}, [pm]);

	const handlePageClick = (newPage: number) => {
		pm.onPageChange(newPage);
	};

	return (
		<>
			<header>
				<h2 className="page-title">{pageTitle}</h2>
				<input
					type="text"
					placeholder="Search..."
					className="search-bar"
					// value={pm.Search}
					// onChange={(e) => {
					// 	pm.Search = e.target.value;
					// 	pm.onSearchChange();
					// }}
				/>
			</header>
			<div className="top-bar">
				<label className="select-label">
					Number of Records &nbsp;
					<select
						className="select-page"
						// value={pm.records}
						// onChange={pm.onRecordsChange}
					>
						<option>10</option>
						<option>25</option>
						<option>50</option>
						<option>100</option>
					</select>
				</label>
				<div className="pagination">
					{pm.currentPage != 1 && (
						<button
							onClick={handlePageClick.bind(pm.currentPage - 1) as () => void}
						>
							&lt;
						</button>
					)}
					{pagesList.first.map((v) => (
						<button
							key={`pagination-page-${v}`}
							onClick={handlePageClick.bind(v) as () => void}
						>
							{v}
						</button>
					))}
					{pagesList.first.length > 0 && pagesList.middle.length > 0 && (
						<span>...</span>
					)}
					{pagesList.middle.map((v) => (
						<button
							key={`pagination-page-${v}`}
							onClick={handlePageClick.bind(v) as () => void}
						>
							{v}
						</button>
					))}
					{(pagesList.first.length > 0 || pagesList.middle.length > 0) &&
						pagesList.last.length > 0 && <span>...</span>}
					{pagesList.last.map((v) => (
						<button
							key={`pagination-page-${v}`}
							onClick={handlePageClick.bind(v) as () => void}
						>
							{v}
						</button>
					))}
					{pm.currentPage != pm.pagesCount && (
						<button
							onClick={handlePageClick.bind(pm.currentPage + 1) as () => void}
						>
							&gt;
						</button>
					)}
				</div>
			</div>
		</>
	);
}
