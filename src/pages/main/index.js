import { useEffect, useState } from 'react'
import ItemList from './components/ItemList'
import { useDispatch } from 'react-redux'
import { getIssue } from '../../reducer/issue'
const MainPage = () => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)

	useEffect(() => {
		dispatch(getIssue(page, limit))
	}, [])

	return !isLoading && <ItemList />
}
export default MainPage

// import { useEffect, useState } from 'react'
// import ItemList from './components/ItemList'
// import { useDispatch, useSelector } from 'react-redux'
// import { getIssue } from '../../reducer/issue'
// import Pagination from '../../components/Pagination'
// const MainPage = () => {
// 	const dispatch = useDispatch()
// 	const [isLoading, setIsLoading] = useState(true)
// 	const [limit, setLimit] = useState(10)
// 	const [page, setPage] = useState(1)
// 	const [totalItems, setTotalItems] = useState(0)
// 	const issue = useSelector(state => state.issue.issue)

// 	useEffect(() => {
// 		dispatch(getIssue(page, limit))
// 			.then(response => {
// 				setTotalItems(response.total || 0)
// 				setIsLoading(false)
// 			})
// 			.catch(error => {
// 				setIsLoading(false)
// 			})
// 	}, [page, limit])

// 	return (
// 		<>
// 			{!isLoading && <ItemList data={issue} limit={limit} page={page} />}
// 			<Pagination
// 				total={totalItems}
// 				limit={limit}
// 				page={page}
// 				setPage={setPage}
// 			/>
// 		</>
// 	)
// }
// export default MainPage
