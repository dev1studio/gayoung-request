import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import styles from '../styles/Request.module.sass';
import { colors, mixin, mq, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';

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
  [mq.maxTablet]: {
    padding: `${Rem(15)} ${Rem(15)} 0`,
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
    width: '100%',
    outline: 'none',
    fontWeight: 900,
    fontSize: Rem(16),
    color: colors.important,
    transition: 'border .15s linear',
    '&::placeholder': {
      color: colors.background,
    },
    '&:focus': {
      borderColor: colors.important,
    },
    '&:-webkit-autofill': {
      backgroundColor: `${colors.background} !important`,
      borderBottom: `3px solid ${colors.important} !important`,
      color: `${colors.white} !important`,
    },
  },
})

const FormControlInput = styled.input(({ isError }) => ({
  border: 'none',
  borderBottom: isError ? '2px solid red' : `2px solid ${colors.background}`,
  padding: `0 ${Rem(15)}`,
  height: Rem(68),
}))

const Error = styled.p({
  position: 'absolute',
  bottom: Rem(-25),
  left: 0,
  fontSize: Rem(14),
  color: 'red',
})

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
        alert('Your song request was successful. 곡 신청에 성공했습니다.');
      }, (error) => {
        alert('Request failed. Please try again. 보내기 실패하였습니다. 다시 시도해주세요.');
      });
  };

  return (
    <RequestContainer>
      <Contents className={styles['request-contents']}>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset>
            <legend>곡 신청 양식</legend>
            <FormGroup>
              <FormLabel htmlFor='user'>YouTube Nickname <i mark='&#x204E;' /></FormLabel>
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
                {errors.user && <Error id='error-user'>필수 입력입니다</Error>}
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='singer'>Singer <i mark='&#x204E;' /></FormLabel>
              <FormControl>
                <FormControlInput
                  id={'singer'}
                  placeholder={'가수명 입력'}
                  type={'text'}
                  aria-required={'true'}
                  aria-invalid={errors.singer ? 'true' : null}
                  aria-describedby={errors.singer ? 'error-singer' : null}
                  isError={errors.singer ? true : false}
                  {...register
                    ('singer', {
                      required: true,
                    })
                  }
                />
                {errors.singer && <Error id='error-singer'>필수 입력입니다</Error>}
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='title'>Song<i mark='&#x204E;' /></FormLabel>
              <FormControl>
                <FormControlInput
                  id={'title'}
                  placeholder={'곡명 입력'}
                  type={'text'}
                  aria-required={'true'}
                  aria-invalid={errors.title ? 'true' : null}
                  aria-describedby={errors.title ? 'error-title' : null}
                  isError={errors.title ? true : false}
                  {...register
                    ('title', {
                      required: true,
                    })
                  }
                />
                {errors.title && <Error id='error-title'>필수 입력입니다</Error>}
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='album'>Album or <br />Related Video URL</FormLabel>
              <FormControl>
                <FormControlInput
                  id={'album'}
                  placeholder={'앱범명 또는 관련 영상링크 URL 입력'}
                  type={'text'}
                  aria-invalid={errors.album ? 'true' : null}
                  aria-describedby={errors.album ? 'error-album' : null}
                  isError={errors.album ? true : false}
                  {...register
                    ('album', {
                      required: false,
                    })
                  }
                />
                {errors.album && <Error id='error-album'></Error>}
              </FormControl>
            </FormGroup>
            <p className={styles['notice']}>앨범명은 입력하지 않아도 되지만, 한 가수가 여러 버전으로 부르는 케이스가 있기 때문에 기입해주시면 좋습니다.</p>
            <p className={styles['notice']}>`곡 신청하기` 버튼은 <strong>1번만</strong> 눌러주세요. 여러번 누르면 제대로 신청되지 않을 수 있습니다.</p>
            <ButtonContainer>
              <SubmitButton>
                곡 신청하기
              </SubmitButton>
            </ButtonContainer>
          </fieldset>
        </form>
      </Contents>
    </RequestContainer>
  )
}

export default withHead(Request, '곡 신청');
