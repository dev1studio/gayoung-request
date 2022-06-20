import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import styles from '../styles/Ideas.module.sass';
import { colors, mixin, mq, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import LinkButton from '../components/utilities/linkButton';

const RequestContainer = styled.main({
  backgroundColor: colors.white,
  [mq.minXlarge]: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: Rem(-90),
      left: 0,
      width: '100%',
      height: Rem(200),
      transform: 'skewY(-5deg)',
      backgroundColor: colors.white,
    },
  },
})

const Contents = styled.div({
  ...mixin.widthSettings,
  padding: Rem(20),
  [mq.minXlarge]: {
    padding: Rem(50),
  },
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq.minSmall]: {
    flexDirection: 'row',
  },
})

const FormLabel = styled.label({
  fontWeight: 900,
  fontSize: Rem(16),
  color: colors.important,
  [mq.maxXsmall]: {
    padding: `${Rem(15)} ${Rem(15)}`,
  },
  [mq.minSmall]: {
    display: 'flex',
    alignItems: 'center',
    width: Rem(200),
    height: Rem(68),
  },
  '& i': {
    fontStyle: 'normal',
    '&::before': {
      content: 'attr(mark)',
      paddingLeft: Rem(5),
      fontWeight: 900,
      fontSize: Rem(20),
      color: colors.accent,
    },
  },
})

const FormControl = styled.div({
  position: 'relative',
  marginBottom: Rem(30),
  [mq.minSmall]: {
    ...mixin.col,
  },
  '& input, & textarea': {
    display: 'block',
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#fff',
    margin: '2px',
    border: 0,
    borderRadius: Rem(34),
    width: 'calc(100% - 4px)',
    outline: 'none',
    fontWeight: 900,
    fontSize: Rem(16),
    color: colors.important,
    '& + div': {
      background: '#d9d9d9',
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: Rem(36),
      width: '100%',
      height: '100%',
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        transform: 'translateX(-50%)',
        transition: 'width .15s linear',
        top: 0,
        left: '50%',
        borderRadius: Rem(36),
        width: '1%',
        height: '100%',
      },
    },
    '&::placeholder': {
      color: '#d9d9d9',
    },
    '&:-webkit-autofill': {
      background: '#fff !important',
      WebkitTextFillColor: `${colors.background} !important`,
      transition: 'background-color 5000s ease-in-out 0s',
      '& + div::before': {
        background: '#410099',
        width: '100%',
      },
    },
    '&:focus': {
      color: `${colors.background} !important`,
      '& + div::before': {
        background: colors.background,
        width: '100%',
      },
    },
  },
})

const FormControlInput = styled.input({
  padding: `0 ${Rem(34)}`,
  height: Rem(68),
})

const FormControlTextarea = styled.textarea({
  padding: Rem(34),
  height: Rem(272),
  resize: 'none',
})

const Error = styled.p()

const Status = styled.div(({ valid }) => ({
  '&::before': {
    background: valid ? 'red' : '#d9d9d9',
    width: valid ? '100% !important' : '1%',
  },
  '& p': {
    position: 'absolute',
    bottom: Rem(-25),
    left: Rem(34),
    fontSize: Rem(14),
    color: 'red',
  },
}))

const ButtonContainer = styled.div({
  paddingTop: Rem(50),
  textAlign: 'center',
})

const SubmitButton = styled.button({
  backgroundColor: colors.white,
  border: '2px solid',
  borderRadius: Rem(5),
  padding: `${Rem(15)} ${Rem(30)}`,
  fontWeight: 700,
  fontSize: Rem(18),
  color: colors.accent,
  transition: 'all .15s linear',
  '&:hover, &:focus': {
    backgroundColor: colors.accent,
    color: colors.white,
  },
  '&:disabled': {
    backgroundColor: colors.important,
    opacity: 0.2,
  },
})

SubmitButton.defaultProps = {
  type: 'submit',
}

function Request() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const form = useRef();

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const onSubmit = (data) => {
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_USER_ID
    )
      .then((result) => {
        alert('Request was successful. 끌로에에게 보내기 성공했습니다.');
      }, (error) => {
        alert('Request failed. Please try again. 보내기 실패하였습니다. 다시 시도해주세요.');
      });
  };

  return (
    <RequestContainer>
      <Contents className={styles['ideas-contents']}>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset>
            <legend>아이디어 제안 양식</legend>
            <FormGroup>
              <FormLabel htmlFor='user'>유튜브 이름<i mark='&#x204E;' /></FormLabel>
              <FormControl>
                <FormControlInput
                  id={'user'}
                  placeholder={'유튜브에서 사용하는 이름'}
                  type={'text'}
                  aria-required={'true'}
                  aria-invalid={errors.user ? 'true' : null}
                  aria-describedby={errors.user ? 'error-user' : null}
                  isError={errors.user ? true : false}
                  {...register
                    ('user', {
                      required: true,
                    })
                  }
                />
                <Status valid={errors.user}>
                  {errors.user && <Error id='error-user'>필수 입력입니다</Error>}
                </Status>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='email'>이메일</FormLabel>
              <FormControl>
                <FormControlInput
                  id={'email'}
                  placeholder={'이메일 주소 입력'}
                  type={'email'}
                  aria-required={'false'}
                  aria-invalid={errors.email ? 'true' : null}
                  aria-describedby={errors.email ? 'error-email' : null}
                  isError={errors.email ? true : false}
                  {...register
                    ('email', {
                      required: false,
                    })
                  }
                />
                <Status valid={errors.email}>
                  {errors.email && <Error id='error-email'>이메일 형식에 맞춰서 작성해 주세요</Error>}
                </Status>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='request'>내용 입력<i mark='&#x204E;' /></FormLabel>
              <FormControl>
                <FormControlTextarea
                  id={'request'}
                  placeholder={'앱범명 또는 관련 영상링크 URL 입력'}
                  aria-invalid={errors.request ? 'true' : null}
                  aria-describedby={errors.request ? 'error-request' : null}
                  isError={errors.request ? true : false}
                  {...register
                    ('request', {
                      required: true,
                    })
                  }
                />
                <Status valid={errors.request}>
                  {errors.request && <Error id='error-request'>필수 입력입니다</Error>}
                </Status>
              </FormControl>
            </FormGroup>
            <p className={styles['notice']}>이메일은 필수 아닙니다. <strong>답장을 원하는 경우</strong> 입력해 주세요.</p>
            <p className={styles['notice']}>이미지, 파일 등 첨부는 안됩니다. 첨부를 원하시는 경우 지메일로 보내주세요. 1157iamari 입니다.</p>
            <p className={styles['notice']}>Github 계정이 있으신 경우 저장소의 <LinkButton href={`https://github.com/dev1studio/gayoung-request/issues`}>Issues</LinkButton>로 남겨주셔도 됩니다.</p>
            <p className={styles['notice']}>1:1 문의를 하실 수도 있어요. <LinkButton href={`https://open.kakao.com/o/s8NzuTle`}>여기</LinkButton>를 눌러주세요. <strong>성적인 농담, 욕설 등의 발언은 신고 대상입니다. 유의해 주세요.</strong></p>
            <p className={styles['notice']}>`<strong>아이디어 제안하기</strong>` 버튼은 <strong>1번만</strong> 눌러주세요. 여러번 누르면 제대로 신청되지 않을 수 있습니다.</p>
            <ButtonContainer>
              <SubmitButton>
                아이디어 제안하기
              </SubmitButton>
            </ButtonContainer>
          </fieldset>
        </form>
      </Contents>
    </RequestContainer>
  )
}

export default withHead(Request, '곡 신청');
