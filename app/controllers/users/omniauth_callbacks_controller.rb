class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def vkontakte
    @user = User.from_vkontakte(request.env['omniauth.auth'])
    puts request.env['omniauth.auth']
    @user.remember_me
    sign_in(@user)

    redirect_to root_path
  end
end
