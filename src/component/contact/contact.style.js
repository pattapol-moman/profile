import styled from 'styled-components';
import { Email } from '@material-ui/icons';
import { PhoneIphone } from '@material-ui/icons';

export const ContactContainer = styled.div`
	text-align: center;
	margin-top: 10%;
`

export const ContactEmail = styled.div`
	font-size: 36px;
	margin-top: 30px;
	margin-bottom: 5%;
	@media (max-width: 480px) {
		font-size: 26px;
	}
`

export const ContactGithub = styled.div`
	font-size: 36px;
	margin-top: 30px;
	margin-bottom: 5%;
	text-align: center;
	cursor: pointer;
	&:hover{
		color: #807a65;
	}
	@media (max-width: 480px) {
		font-size: 26px;
	}
`

export const ContactPhone = styled.div`
	font-size: 36px;
	margin-top: 30px;
	margin-bottom: 5%;
	@media (max-width: 480px) {
		font-size: 26px;
	}
`

export const EmailIcon = styled(Email)`
    margin-right: 10px;
	font-size: 40px!important;
`

export const PhoneIphoneIcon = styled(PhoneIphone)`
	font-size: 25px!important;
`