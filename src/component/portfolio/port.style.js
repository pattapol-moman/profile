import styled from 'styled-components';
import { Build } from '@material-ui/icons'
import { Description } from '@material-ui/icons'

export const PortContainer = styled.div`
	text-align: center;
	margin-top: 10%;
`

export const PortData = styled.div`
	font-size: 36px;
	margin-top: 30px;
	margin-bottom: 5%;
	@media (max-width: 480px) {
		font-size: 26px;
	}
`

export const PortName = styled.div`
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 2%;
	@media (max-width: 480px) {
		font-size: 20px;
		
	}
`

export const PortDes = styled.div`
	font-size: 20px;
	font-weight: bold;
		margin-bottom: 2%;
	@media (max-width: 480px) {
		font-size: 20px;
		font-weight: 500;
	}
`

export const PortTools = styled.div`
	font-size: 20px;
	@media (max-width: 480px) {
		font-size: 20px;
	}
`

export const BuildIcon = styled(Build)`
	font-size: 20px !important;
	color: crimson;
`
export const DescriptionIcon = styled(Description)`
	font-size: 20px !important;
	color: rgba(55,111,255,0.75);
`