// react
import { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
// hooks
import { useSignInForm } from './useSignInForm.hook';
// layouts
import { PanelLayout } from '@/shared/layouts';
// components
import { Button, InputField } from '@/shared/components';

const SignInForm = memo(() => {
    const { handleSignIn, signInFormFields, signInAction, translate } = useSignInForm();

    return (
        <form className="w-full max-w-sm" onSubmit={handleSignIn}>
            <PanelLayout>
                <div className="flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">{translate('app.title')}</h1>

                    <h2 className="text-lg">{translate('auth.sign-in.title')}</h2>
                </div>

                <fieldset className="flex flex-col gap-4">
                    {signInFormFields.map((field, index) => (
                        <Fragment key={index}>
                            <InputField {...field} />
                        </Fragment>
                    ))}
                </fieldset>

                <Button {...signInAction} />

                <Link
                    to="../recovery"
                    replace
                    className="text-secondary-500 underline font-medium self-center">
                    {translate('auth.sign-in.recovery-nav')}
                </Link>

                <span>
                    <span>{translate('auth.sign-in.sign-up-hint')} </span>

                    <Link
                        to="../sign-up"
                        replace
                        className="text-secondary-500 underline font-medium">
                        {translate('auth.sign-in.sign-up-nav')}
                    </Link>
                </span>
            </PanelLayout>
        </form>
    );
});

export default SignInForm;
