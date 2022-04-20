import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/loader'
import { photosLoading } from '../store/actions/actionCreator'
import { getLoadingStatus } from '../store/reducers/photos'

const PhotosLoader = ({ children }) => {
	const isLoading = useSelector(getLoadingStatus())
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(photosLoading())
	}, [dispatch])

	return isLoading ? <Loader /> : children
}

export default PhotosLoader
