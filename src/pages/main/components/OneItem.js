import styled from 'styled-components'

<<<<<<< HEAD
<<<<<<< HEAD
const OneItem = () => {
	return <S.Wrapper>이슈 들어가는 곳</S.Wrapper>
=======
=======
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
const OneItem = ({ item }) => {
	const { number, title, updated_at, user } = item
	console.log(item)
	return (
		<S.Wrapper>
			<S.Number>{'#' + number}</S.Number>
			<S.Title>{title}</S.Title>
			<S.UpdatedAt>{updated_at}</S.UpdatedAt>
			<S.User>{user.login}</S.User>
		</S.Wrapper>
	)
<<<<<<< HEAD
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
=======
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
}
export default OneItem

const Wrapper = styled.div`
	width: 750px;
	height: 200px;
	margin-top: 15px;
	margin-bottom: 15px;
	border-radius: 20px;
	border: 0.1rem solid #888;
	padding: 20px;
	color: white;
	font-size: 17px;
	:hover {
		background-color: #444;
	}
`
<<<<<<< HEAD
<<<<<<< HEAD

const S = {
	Wrapper,
=======
=======
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
const Number = styled.div``
const Title = styled.div``
const UpdatedAt = styled.div``
const User = styled.div``

const S = {
	Wrapper,
	Number,
	Title,
	UpdatedAt,
	User,
<<<<<<< HEAD
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
=======
>>>>>>> ba6c96a881a295c75049cd793c481cff6154bb82
}