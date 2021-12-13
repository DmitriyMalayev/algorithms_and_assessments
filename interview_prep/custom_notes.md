# Authentication in Sinatra

In order to implement Authentication in Sinatra, we're going to need to address the following tasks:

1. Enable the rack session cookie middleware.
2. Generate a session secret so that our cookies are securely encrypted.
3. Create a `User` model that stores an email/username and encrypted password
4. Implement the `has_secure_password` macro in the `User` model to enable storing an encrypted version of the password and authenticating against that.
5. Build forms for sign up and log in and links to the routes that render them
6. Build out controllers that handle rendering forms and responding to their submission
7. Use the methods from `has_secure_password` to create user accounts and authenticate them later, storing the user's ID in session cookies using the `session` hash in our controllers.

### Dependencies (Gems/packages)

- (✔) `activerecord` => makes methods for us that helps us make relationships
- (✔) `bcrypt` => Password Encryption for the string that's passed in
- (✔) `dotenv` => Used to create a file which we can add to git ignore, so it won't be tracked **for devs**
- (✔) `session_secret_generator` => Creates a cryptographically random string of hexadecimal characters.
  Used with session_secret **for devs**

- (✔) `tux` => Tux dresses up sinatra for interactive use. We use it to interact with your helpers, view rendering and your app's response objects. Tux also gives you commands to view your app's routes and settings.
  **_If you have models, you can also interact with them using tux._**

## Configuration (environment variables/other stuff in config folder)

- enable sessions in the controller
- set session secret in controller to `ENV['SESSION_SECRET']`
- create `SESSION_SECRET` in a file called .env
- load the varibles in the `.env` file using `Dotenv.load` in `config/environment`

* !NEW INFORMATION
  `config.ru` needs to `use` our new controller `PostsController`

**_To Test It's Working_**
Open `bundle exec tux`
Type in `ENV['SESSION_SECRET']`

You Should See The Value Inside Of The `.env` file.

- Eventually we'll have to load our 2 controllers within the `config.ru` file as well
- We will need to add `method_override` so that we're able to send a delete request for `logout`

# Database

We'll need a `UsersTable` with a Column `password_digest`
We'll also need an additional column to find a user by (email or username)

- !NEW INFORMATION
  Add a posts table with 3 columns title:string content:text author_id:integer

# Models

We'll need a "User Model" that inherits from `ActiveRecord::Base`
It should invoke the `has_secure_password` macro

\*! Add a Post model that belongs_to an author (a User)

## Views

- We need a view with a `registration form` for `creating a new account`
- We need a view with `login form` for `logging into an existing account`
  Make sure to have navigation links in `layout.erb`

This is used for `Navigation` and `Conditional Logic`  
It should have Conditional Logic for Displaying Buttons (login, logout, sign up)
We have to implement yield so the same thing appears on every page.

\*! ADD THE FOLLOWING:
`index view` => Shows a list of posts with links to the full post  
`show view` => Displays a full post
`new view` => Displays form to create a new post
`edit view` => Displays existing form so we can update a post.

## Controllers

- `SessionsController` => For Logging In and Logging Out
- `UsersController` => For Creating New Accounts
- `PostsController` => For CRUD actions for posts

## Routes

- `get '/login'` => For Rendering The Log In Form
- `post '/login'` => For Handling The Log In Form Submission
- `delete '/logout` => For Handing A Logout Button Click
- `get '/users/new'` => For Rendering The Registration Form
- `post '/users` => For Handling The Registration Form Submission

* ! HTTP VERBS

- `get '/posts'` => Index of Posts
- `get '/users/new'` => Form to create a new form
- `post '/posts` => Handles New Form Submission
- `get '/posts/:id` => Detail Page For Post
- `get '/posts/:id/edit` => Form To Edit Existing Post (only viewable by author of post)
- `patch '/posts/:id` => Handle edit post form submission (only editable by author of post)
- `delete '/posts/:id` => Delete a particular post (only deletable by author of post)

\*! What Will Corneal Do For Us?
Creates Migration
Create Controller and Routes (connected with views)
Adds Views (must be filled in)
Adds New Controllers to the config.ru file

\*! Using a Corneal Generator
`corneal new APP_PATH` => Creates a New Sinatra Application // `We run this to start the app`  
`corneal scaffold NAME` => Generates a Model With It's Associated Views, Controllers and Routes
`corneal model NAME` => Generates a Model and Migration  
`corneal controller NAME` => Generates a Controller with Routes and Views

`corneal help` => Allows you to see a list of commands
`corneal help [COMMAND]` => Describes Available Commands or One Specific Command
`corneal -v` => Shows Corneal Version Number

\*! NOTES
We will use the `Scaffold Generator`
It will create a Model, Migration To Create An Associated Table,
Controller with a matching name, and a Views directory with four files.

It will also add the controller to the `config.ru` file and tell it to use that controller.
If we pass in `additional arguments` after the name of the model, we will add columns to our migration.

The default column type is string.
We can add a colon after the name of the column and specify another column type.

\*! We Run The Following:
`corneal scaffold Post title:string content:text author_id:integer`

\*! Prints The Following
create app/models/post.rb
create db/migrate/20200827232626_create_posts.rb
create app/controllers/posts_controller.rb
insert config.ru
create app/views/posts
create app/views/posts/edit.html.erb
create app/views/posts/index.html.erb
create app/views/posts/new.html.erb
create app/views/posts/show.html.erb

\*! Tasks We Need To Associate Users and Posts

```ruby
class Post < ActiveRecord::Base
  belongs_to :author, class_name: "User"
  #Adding class_name: "User" This informs ActiveRecord to find a User instance
  #that's assicated with a post we call this method on, NOT an Author instance.

  #The foreign key :author_id is inferred from the fact that we have a belongs_to :author
  #If the foreign_key was something else, we'd also have to add foreign_key: "something_else_id"
end

class User < ActiveRecord::Base
  has_secure_password
  validates :email, presence: true, uniqueness: true
  has_many :posts, foreign_key: "author_id"
  #The foreign key would be assumed to be user_id because has_many is invoked within the User class.
  #Because our foreign_key is `author_id`, we need to specify that in the option passed to has_many
end
```

\*! How Do We Add index ?
To add in index, we need to get all of the Posts and iterate over them in the corresponding view

```ruby
  get "/posts" do
    @posts = Post.all
    erb :"/posts.index.html"
  end
```

```html
<h1>This is the Model's index page.</h1>
<% @posts.each do |post| %>
<p><a href="/posts/<%= post.id% >"><%= post.title%></a></p>
<% end %>
```

For show we need to find a post using the id coming through the params hash.
We need the one that's captured by the Dynamic Route
Then we can show the details in the `show.html.erb` view template.

```ruby
get "/posts/:id" do   #GET: /posts/5
  @post = Post.find(params[:id])
  erb :"/posts/show.html"
end

<h1><%= @post.title %> </h1>
<p><%= @post.author.email %></p>
<p><%= @post.content%></p>

#When we're building a form??

*! IMPORTANT UNDERSTANDING FOR ASSESSMENT
```

# What determines where the browser sends a request upon submission?

`method=""` and `action= ""` attribute values
HTTP verb action is the path it's sent to

# What determines the keys in the params hash that appear in the controller upon form submission?

The value of the `name` attributes in your form inputs.

\*! When We Add Our Form It Will Look Something Like This

<h1>New Post</h1>
<% if @post.errors.any?  %>
<div id="error_explanation">
<h2><%= @post.errors.count %>error(s) prohibited this post from being saved:</h2> 
    <ul>
        <%@post.errors.full_messages.each do |msg|  %>
            <li><%= msg  %></li>
        <% end %> 
    </ul>
</div>
  <% end %>

In the view, we can handle displaying errors by copying this code  
from Rails Guides for ActiveRecord Validations
The above is an editted vesion of Displaying Validation Errors in Views
If there are any errors attached to the post, this shows how many there are in a listed format

<form method="post" action="/posts">
    <p>
        <div><label for="title">Title</label></div>
        <input id="title" type="text" name="post[title]" value="<%= @post.title %>"/> 
    </p>
    <p> <div><label for="content">content</label></div>
        <textarea rows="8" cols="45" id="content" type="text" name="post[content]"><%= @post.content %></textarea> 
    </p>
    <input type="submit" value="Create Post"/>
</form>
```
*! NOTES 
<input id="title" type="text" name="post[title]" value="<%= @post.title %>"/>  
The value will have the title from the previous post. If it's a new post, it will be empty. 
post and title are both keys.

<textarea rows="8" cols="45" id="content" type="text" name="post[content]"><%= @post.content %></textarea>
Similar to above but the erb tags is inside of the text area
This way the content will still be there upon form reloading  
text area is not a self closing tag

\*! The Corresponding Controller Should Look Like This

```ruby
  get "/posts/new" do    #NEW
    @post = Post.new
    erb :"/posts/new.html"
  end

  post "/posts" do    #CREATE
    @post = current_user.posts.build(title: params[:post][:title], content:params[:post][:content])
    if @post.save
    #validations tests this method
    #works on any instance

      redirect "/posts"
    else
      erb :"/posts/new.html"
       #gives the user another chance
    end
  end
```

\*! Adding An Edit Form

We can use our new form as a template because of the choice we have made regarding displaying errors
and making sure the values for our inputs reflect the values stored in our `@post` instance variable.

1. We copy `new.html.erb` and paste it in `edit.html.erb`
2. We add a `method override` input to our form to send a patch request instead of a post request
3. We change the header from `"New Post"` to `"Edit Post"`
4. We update the form action
<form method="post" action="/posts">    *ORIGINAL FORM*  
<form method="post" action="/posts<%= @post.id  %>">  *NEW FORM*

<h1>Edit Post</h1>

<% if @post.errors.any? %>

<div id="error_explanation">
<h2><%= @post.errors.count %>error(s) prohibited this post from being saved:</h2> 
    <ul>
        <% @post.errors.full_messages.each do |msg|  %>
            <li><%= msg  %></li>
        <% end %> 
    </ul>
</div>
  <% end %>

<form method="post" action="/posts/<%= @post.id %>">
    <input type="hidden" name="_method" value="patch"/>   
    <!-- value must match http verb in here it's "patch" -->
    <p>
        <div><label for="title">Title</label></div>
        <input id="title" type="text" name="post[title]" value="<%= @post.title  %>"/>
    </p>
    <p>
        <div><label for="content">content</label></div>
        <textarea rows="8" cols="45" id="content" type="text" name="post[content]"><%= @post.content %></textarea>
    </p>
    <input type="submit" value="Update Post"/>
</form>

\*! Adding Error Handing For When We Don't Find a Record

If we hit an `record is not found` issue when using `Post.find_by_id` we can add a method
that finds the record and redirects with an error message if the record is not found.
In order to display a message after a redirect, additional middleware is required.
This middleware will allow us to write cookies, so some data will persistant for a Single Request / Response Cycle and then it will be cleared. The steps are listed below.

1. Install sinatra flash by typing in gem `sinatra-flash`
2. Run `bundle install
3. register `Sinatra::Flash` in our `application_controller.rb` file configuration

```ruby
# app/controllers/application_controller.rb

configure do
  set :public_folder, `public`
  set :views, `app/views`
  set :sessions, true
  set :session_secret, ENV["SESSION_SECRET"]
  set :method_override, true
  register Sinatra::Flash   #THIS ONE
end
```

\*! <%= styled_flash %>
We add the `styled_flash` view helper to our `layout.erb` file,
Now we can use flash messages to display text to our users after redirects.
This can be done throughout the application.

```html
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
  <!--<![endif]-->
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <title>Authentication</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="/stylesheets/main.css" />
  </head>
  <body>
    <div class="wrapper">
      <nav>
        <a href="/posts">Posts</a>
        <% if !logged_in? %>
        <a href="/login">Log In</a>
        <a href="/users/new">Sign Up</a>
        <% else %>
        <a href="/posts/new">New Post</a>
        <form method="post" action="/logout" style="display: inline-block;">
          <input type="hidden" name="_method" value="delete" />
          <input type="submit" value="Log Out" />
        </form>
        <% end %>
      </nav>
      <%= styled_flash %> <%= yield %>

      <footer class="branding">
        <small>&copy; 2020 <strong>Authentication</strong></small>
      </footer>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <!--[if lt IE 7]>
      <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.2/CFInstall.min.js"></script>
      <script>
        window.attachEvent("onload", function () {
          CFInstall.check({ mode: "overlay" });
        });
      </script>
    <![endif]-->
  </body>
</html>
```

\*! Adding A Private Method To The PostsController

This `private` method will be added to the PostsController and it will find a Post based on `params[:id]`
and then redirect to /posts with an error message if it doesn't find a Post with that id.

```ruby

private

def set_post
  @post = Post.find_by_id(params[:id])
  if @post.nil?
    flash[:error] = "Couldn't find a Post with id: #{params[:id]}"      #Like this
    redirect "/posts"
  end
end

*! Now, we need to call this method from the routes in our controller,
*! The routes in the controller need to `find` a Post based on an `id` in params

get "/posts/:id" do   #SHOW
  set_post
  erb :"/posts/show.html"
end

get "/posts/:id/edit" do  #EDIT
  set_post
  erb :"/posts/edit.html"
end

patch "/posts/:id" do   #UPDATE
  set_post
  redirect "/posts/:id"
end

delete "/posts/:id" do #DESTROY
  set_post
  redirect "/posts"
end

*! Our PostsController Now Looks Like This:

  get "/posts" do   #INDEX
    @posts = Post.all    #SINGULAR OR PLURAL??
    erb :"/posts/index.html"
  end

  get "/posts/new" do   #NEW
    redirect "/login" if not logged_in?   #VARIATIONS??
    @post = Post.new
    erb :"/posts/new.html"
  end

  post "/posts" do   #CREATE
    redirect "/login" if not logged_in?
    @post = current_user.posts.build(title: params[:post][:title], content: params[:post][:content])
    if @post.save
      redirect "/posts"
    else
      erb :"/posts/new.html"
    end
  end

  get "/posts/:id" do   #SHOW
    set_post
    erb :"/posts/show.html"
  end

  get "/posts/:id/edit" do  #EDIT
    set_post
    erb :"/posts/edit.html"
  end

  patch "/posts/:id" do   #UPDATE
    set_post
    redirect "/posts/:id"
  end

  delete "/posts/:id" do #DESTROY
    set_post
    redirect "/posts"
  end

  private

    def set_post
      @post = Post.find_by_id(params[:id])
      if @post.nil?
        flash[:error] = "Couldn't find a Post with id: #{params[:id]}"
        redirect "/posts"
      end
    end
  end


*! Building Out The Update Functionality

patch "/posts/:id" do
  set_post

  if @post.update(title: params[:post][:title], content: params[:post][:content])
    flash[:success] = "Post successfully updated"
    redirect "/posts/#{@post.id}"
  else
    erb :"/posts/edit.html"
  end
end
```

*! Making Sure That Only The Users Who Created A Post Can Update or Delete It
The DRY method of doing this is to add a method that accepts a post as an argument
This method also needs to *ensure that the logged in user has permissions to interact with that post\*.
We call this method `authorize_post(post)`

We will also need a method to redirect a user if they're not authorized to perform an action.

```ruby
def redirect_if_not_authorized
  if !authorize_post(@post)
    flash[:error] = "You don't have permission to do that action"
    redirect "/posts"
  end
end

def authorize_post(post)
  current_user == post.author
end
```

<!--
  Once we have this method we want to call it right before we do anything that
  only a User who is authorized on this post should be able to do
-->

\*! This is What Our PostsController Should Look Like

```ruby
class PostsController < ApplicationController

  get "/posts" do  # INDEX
    @posts = Post.all
    erb :"/posts/index.html"
  end

  get "/posts/new" do  #NEW
    redirect "/login" if not logged_in?
    @post = Post.new
    erb :"/posts/new.html"
  end

  post "/posts" do  #CREATE
    redirect "/login" if not logged_in?
    @post = current_user.posts.build(title: params[:post][:title], content:params[:post][:content])
    if @post.save
      redirect "/posts"
    else
      erb :"/posts/new.html"
    end
  end

  get "/posts/:id" do  #SHOW
    set_post
    erb :"/posts/show.html"
  end

  get "/posts/:id/edit" do   #EDIT
    set_post
    redirect_if_not_authorized
    erb :"/posts/edit.html"
  end

  patch "/posts/:id" do  #UPDATE
    set_post
    redirect_if_not_authorized
    if @post.update(title: params[:post][:title], content:params[:post][:content])
      flash[:success] = "Post successfully updated"
      redirect "/posts/#{@post.id}"
    else
      erb :"/posts/edit.html"
    end
  end

  delete "/posts/:id" do  #DESTROY
    set_post
    redirect_if_not_authorized
    @post.destroy
    redirect "/posts"
  end

  private

  def set_post
    @post = Post.find_by_id(params[:id])
    if @post.nil?
      flash[:error] = "Couldn't find a Post with id: #{params[:id]}"
      redirect "/posts"
    end
  end

  def redirect_if_not_authorized
    if !authorize_post(@post)
      flash[:error] = "You don't have permission to do that action"
      redirect "/posts"
    end
  end

  def authorize_post(post)
    current_user == post.author
  end
end

*! Protecting Routes Behind a Login Requirement
# To make sure Users can only access routes that are protected when the're logged in,
# We can add a private method in the ApplicationController Class


`app/controllers/application_controller.rb`
private

def redirect_if_not_logged_in
  if !logged_in?
    flash[:error] = "You bust be logged in to view that page"
    redirect request.referrer || "/login"
    end
end

*! Once We Have This Method, We Can Call It In Any Controller Action (Route) Where We Want Only Logged In Users To Be Able To Visit
# CRUD Functionality Established
# Now We Can Use Conditional Logic In Views To Display Links / Buttons When Appropriate

`app/views/posts/show.html.erb`
```

<h1><%= @post.title %> </h1>
<h1><%= @post.author.email %></h1>
<p> <%= @post.content %>
<% if authorize_post(@post) %>
<div>
  <a a href="/posts/<%= @post.id %>/edit"><button>Edit</button></a>
  <form method="post" action="/posts/<%= @post.id %>" style="display: inline-block;">
    <input type="hidden" name="_method" value="delete"/>
    <input type="submit" value="Delete"/>
    </form>
</div>
<% end %>

\*! Notes About || and &&:

`true || false` => true
`false || true` => true

`false || nil` => nil
`true && false` => false
`true && nil` => nil
`true && "hello"` => "hello"
`nil && "hello"` => nil

\*! RAILS GENERATORS  
Rails Generators Actually Do Less For Us

`rails scaffold`
Generates everything,
The only thing we need to do is run `rake db:migrate`
Downside is we have to rewrite a lot

`resource`
Generates Migration, the Model and Views Directory
Does not generate files and none of the actions.

# How To Follow along

\*! corneal new authentication_codealong

- ADD THIS TO GEM FILE

```ruby
group :development, :test do
  gem 'dotenv'
  gem 'session_secret_generator'
end
```

`run => bundle`

Create a file in the root of your project called `.env`
Type in SESSION_SECRET= in this file

`run => generate_secret`

paste the output into your .env file after the = sign

`SESSION_SECRET`=3688fd1c5e985597198a7d918d6933994356f4ae232dae625e7f8f83228378f786d61c9fc778cc4cf823f2e09e11c5ed18eac69049de217eb32dd5c81e0f74f7

<!-- Don't use the same session secret as above**   -->

Add the file name `.env` to `.gitignore`
This will prevent it being tracked in git  
Both of these files are in the root directory of the project
Make sure your .env file is NOT in version control

Load the environment variable `SESSION_SECRET` into our app
We load it by using `dotenv` gem's `Dotenv.load` method within `config/environment.rb`

```ruby
# config/environment.rb

ENV[`SINATRA_ENV`] ||= "development"
require "bundler/setup"
Bundler.require(:default, ENV["SINATRA_ENV"])

ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3"
    :database => "db/#{ENV['SINATRA_ENV']}".sqlite
)
Dotenv.load

require "./app/controllers/application_controller"
require_all "app"
```

\*! TESTING
run => `bundle exec tux` followed by `ENV['SESSION_SECRET']`

*! Application Controller
Configuring our Controller to use Sessions and our `'SESSION_SECRET'` and
also enabling the `Rack Method Override Middleware`
so we can use the *hidden input trick\*
This provides the ability to send `PUT`, `PATCH`, and `DELETE` requests later on.

```ruby
# app/controllers/application_controller.rb

require ".config/environment"
class ApplicationController < Sinatra::Base
    configure do
        set :public_folder, "public"
        set :views, "app/views"
        set :sessions, true #Enables Sessions
        set :session_secret, ENV["SESSION_SECRET"]  #works because of earlier config
    end

    get "/" do
        erb :welcome
    end
end

```

# Database

For our database we're going to need a Users table with a password digest column,
Our encrypted password will be stored in the password digest column.
We will need an additional column that will find the user by an email address.

# User Model

The reason we wouldn't use the Scaffold Generator that Corneal provides is it will give us many views and controller actions that we don't need.

Instead we run corneal model etc. This will just create the model and the migration but it won't create a controller and it will just create the model and the migration.

After configuring our Controller, we build a `User` model and a `users` table

run => `corneal model User email:string password_digest:string`

<!-- This will create model which inherits from ActiveRecord::Base and a migration  -->

run => `rake db:migrate`

<!-- Gets it to database -->

\*! Sessions Notes  
We Enable Sessions by setting sessions to true in the controller
This tells rack to send a session cookie back with the response.
This is another way we can interface with requests sent from the browser.

`params`
Access URL Information
`sessions`
Provides Us Access Along With Requests
When Someone Sends A Request We can Write Data To The Cookie Using Session.

\*! has_secure_password
In the `User` model, we invoke the `has_secure_password` macro

```ruby
class User < ActiveRecord::Base
    has_secure_password
end
```

\*! has_secure_password (important methods)

`password=password`
This method takes an argument of a password (unencrypted) and uses it to create new hashes
and salted (encrypted) password which is an instance of the `BCrypt::Password` class.

`authenticate(test_password)`
This extracts the salt from the stored (encrypted) password and uses it to create a new password using `test_password`.
If those two are the same it returns the user, `truthy` and if they're not it returns `false`

`password=`
This is called when you create a new user.

\*! has_secure_password (examples)
@user.password = "password"

`@user`
password_digest => Our password will be converted to a mix of hexadecimal characters

`@user.authenticate("password")`  
This will work and provide the instance

`@user.authenticate("password1")`
This will return false

```ruby
User.new(email: params[:email], password: params[:password])
```

Creating our Controllers and Routes for Registration
Create a file called `users_controller.rb` and add the following content:

# app/controllers/users_controller.rb

```ruby
class UsersController < ApplicationController

  get '/users/new' do
    # render the form to create a user account
    erb :'/users/new'
  end

  post '/users' do
    @users = User.new(email: params[:email], password: params[:password])
  end
end
```

Make sure that our Sinatra App knows to use this controller to respond to incoming requests.
To do that we'll have to add a line to the bottom of our `config.ru` file:

```ruby
# config.ru
require './config/environment'

if ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end

run ApplicationController
use UsersController
```

To try this out in the browser, we'll also need a view to render the form.
Create a folder `app/views/users` and then a file inside of it called `new.erb`

```html
<!-- app/views/users/new.erb -->
<h1>Sign Up</h1>
<form method="post" action="/users">
  <p>
    <div><label for="email">Email</label></div>
    <input type="email" name="email" id="email" />
  </p>
  <p>
    <div><label for="password">Password</label></div>
    <input type="password" name="password" id="password" />
  </p>
  <input type="submit" value="Sign Up"/>
</form>
```

\*! Updating Our Controller To Handle The Form Submission

```ruby
# app/controllers/users_controller.rb
class UsersController < ApplicationController
  get '/users/new' do
    # render the form to create a user account
    erb :'users/new'
  end

  post '/users' do
    @user = User.new(email: params[:email], password: params[:password])
    if @user.save
      session[:id] = @user.id
      redirect "/"
    else
      erb :'users/new'
    end
  end
end
```

## Creating Our Controllers and Routes For Registration (Manually)

Create a file caled `users_controller.rb`

<!-- app/controllers/user_controller.rb -->

**_Add The Following:_**

```ruby
#  app/controllers/users_controller.rb

 class UsersController < ApplicationController
  get "/users/new" do
   erb :"users/new"
  end

  post "/users"
    @user = User.new(email: params[:email] , password: params[:password])

    if @user.save
      session[:id] = @user.id
      redirect "/"
    else
      erb :"users/new"
 end
```

`get "/users/new"` => Renders Form to create a user account
`post "/users"` => Grabs the information from the form, email address and password via params.
Make sure to remember that it's params[:password] NOT password_digest

`@user.save` => If @user won't save, there will be an error.
`@user.errors` => We can view the error via this method

\*! Notes Regarding Users Controller
set :views, "app/views/users" (removed)  
This was overriding what's specified in the application_controller
In order to use this we need to create a directory under views called `users`  
Removed because it was conflicting with styles in layout which was generated with corneal.
We need the layout with navigation links.

\*!Cookies and Active Session`
The way that we write to cookies within a controller is by interacting with the session hash
and one of the most common ways you have of doing this is storing the id of the user who's logged in
in a cookie that's sent back as a response.

We take the user's id the one who just signed in and we store that in the session hash which is really
writing it to the encrypted cookie that we sent back. The next time this person sends a
request we can read their user id from the session.
This is how we're going to tell if they're logged in.

session[:id] = @user.id

\*! welcome.erb

```html
<!-- This file (welcome.erb) is similar to our environment. 
We have added the current user's session cookie ?? -->
<li><b>Logged In User's Id:</b> <%= session[:id] %></li>
```

```ruby
# config.ru file

require "./config/environment"

if ActiveRecord::Migrator.needs_migration?
  raise "Migrations are pending. Run 'rake db:migrate' to resolve the issue"
end

run ApplicationController
use UsersController
```

`To try this in the browser:` 🌍

We will need a view to render the form
Create a folder `app/views/users`  
Create a file inside of users called new.erb

`Notes`
The config.ru file determines what controllers actually respond to the request that we sent.  
If we create a controller and the file gets loaded it's great
If we create a controller but don't add it to config.ru and have not used corneal scaffold

We need to make sure that our Sinatra App knows to use this controller to respond to incoming requests.
To do that we will have to add a line to the buttom of our `config.ru` file.

```html
<!-- app/views/users/new.erb  -->

<h1>Sign Up</h1>
<form method="post" action="/meals">
  <p>
    <div><label for="email">Email</label></div>
    <input type="email" id="email" name="email" />
  </p>
  <p>
    <div><label for="password">Password</label></div>
    <input type="password" id="password" name="password" />
  <input type="submit" value="Sign Up" />
</form>
```

`method` => GET or POST // HTTP VERB  
`action` => /users  
`type` => What it feels like to interact with the input  
`name` => When you submit the form how the params are named
`id` => Used to link with label
`value` => What it says on the button (when used with type submit?)

`div` => used for blocks
`labels` => used for inline

# Creating Our Controllers and Routes For Login

```ruby
# app/controllers/sessions_controller.rb

class SessionsController < ApplicationController

    get "/login" do
    erb :"/sessions/login"
    end

    post "/login" do
        @user = User.find_by_email(params[:email])
        if @user && @user.authenticate(params[:password])
            redirect "/"
        else
            @error = "Incorrect email or password"
            erb :"/sessions/login"
        end
    end


# We could also  use this if conditional statement
# if @user.try(:authenticate, params[:password])

# We have moved the @error instance variable to login.erb


```

**_Make Sure To Update config.ru_**
`run ApplicationController`
`use UsersController`
`use SessionsController`

**_Create a File In app/controllers_**
`application_controller.rb`
`sessions_controller.rb`
`users_controller.rb`

**_Make Sure To Use Inheritence_**

```ruby
class SessionsController < ApplicationController
end

class UsersController < ApplicationController
end
```

**_Create a Sessions Directory Inside Of Views_**
`app/views/sessions`

**_Create a File Inside Of Sessions Directory. This is Your Form / Template_**
`app/views/sessions/login.erb`

**_Important Difference With login.erb_**  
We want to check if the credentials that the user inputted match with an existing user.
This is why `has_secure_password`, `validates` and `uniqueness` are so important.

\*! Finding Our User's ID

```ruby
params =>
{
  "email" => "dakota@dakota.com",
  "password" => "password"
}

User.find_by_email(params[:email])
User.find_by(email: params[:email])
```

`.find`  
Takes an id, gives record with that id.
If there isn't one it will raise an error

`.find_by`
Takes in a key value pair. If there isn't one it will return nil.
If you forget to pass in a key and just pass in a value,
it will return the first record in the table

\*! Adding Logout Functionality
First we Add Navigation so we can get to the Sign Up and Log In pages

<nav>
    <a href="/login">Log In</a>
    <a href="/users/new">Sign Up</a>
</nav>

⭐️
Whenever we have an `href`
It has to `match` one of our `get routes` in one of our controllers

```html
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
  <!--<![endif]-->
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />

    <title>Authentication</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="/stylesheets/main.css" />
  </head>
  <body>
    <div class="wrapper">
      <nav>
        <a href="/login">Log In</a>
        <a href="/users/new">Sign Up</a>
        <%# Whenever we have an `href` it has to `match` one of our `get routes`
        in one of our controllers %>
      </nav>
      <%= yield %>

      <footer class="branding">
        <small>&copy; 2020 <strong>Authentication</strong></small>
      </footer>
    </div>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <!--[if lt IE 7]>
      <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.2/CFInstall.min.js"></script>
      <script>
        window.attachEvent("onload", function () {
          CFInstall.check({ mode: "overlay" });
        });
      </script>
    <![endif]-->
  </body>
</html>
```

# Adding Conditional Logic To Display a Log Out Link If We're Logged In // Display Links To Sign Up, Sign In etc.

\*! How do we know if someone is logged in or not?

We use their user.id in the session
`session[:id] = user.id`

The line above logs the user in. The cookie now has the user's id.
This is the identifier from the db. We are storing the id of the user who was just authenticated.
Being logged in means you have a cookie that identifies you

```ruby
    post "/users" do
        @user = User.new(email: params[:email], password: params[:password])
        if @user.save
            session[:id] = @user.id
            redirect "/"
        else
            erb :"users/new"
        end
    end
end
```

If we add a private method to our ApplicationController, it will be accessible within all of our routes defined in Controllers that inherit from ApplicationController, therefore it will also be accessible in the associated views.

We defined a `private` method called `current_user` that will return the currently logged in user if there is one, and nil if there isn't one. This will allow us to implement Conditional Logic in the view to display different content to logged in users.
We also defined a method called `logged_in?` This will return true or false.

\*! What Are Private Methods?
`private` methods are methods that can't be called from outside of scope of an instance of the application controller class.
It cannot be called directory but a method that gets called on one of the controllers can call it.
It's a method that can't be called directory on an instance but it can be called by an instance method in a controller.
Private methods and Helper Methods are similar.

```ruby
require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :sessions, true
    set :session_secret, ENV["SESSION_SECRET"]
    set :method_overide, true
  end

  get "/" do
    erb :welcome
  end

private

  def current_user
    User.find_by_id(session[:id])
  end

  def logged_in?
    !!current_user
  end

end

** NOTES

def current_user
  session[:id] && User.find(session[:id])
  `.find gives nil if it doesn't find anything`
end

def logged_in?
  !!current_user  `nil` => false    `false` => true
end
```

\*! Rack Session Cookie Middleware // How Does A Cookie Work?  
Cookies are how we're going to keep track of users so the way a cookie works is when a user rends a request to our server we issue a response and we include a cookie. Then when that user sends another request to us, that cookie comes back with the request cookie's just as a text file that's stored in the browser. It's tagged with the domain that issued it.
When the same requests are made, the server uses cookies to identify the user. HTTP by itself doesn't have a way of identifying who is sending a request the cookies allow us to simulate memory by storing data in a file in the browser, and then having that file sent along subsequent requests.

\*! First Step
The first step is to include cookies in the Sonatra App. This is done in the configuration setting.
Then we need to `Generate a Session Secret` so that our cookies are securely encypted.  
We want to `keep that secret out of version control`.

We generate a user model that stores an email / username and an encrypted password.
We don't store passwords in plain text.  
In order to make our passwords more secure we use a macro that is built into active record it's called `has secure password`

If you have a model that inherits from `ActiveRecord::Base`
You can invoke `has secure password` just like you invoke has_many, belongs_to.

\*! What are the main things Macros // ActiveRecord do for a Class?
They write methods that we can use, which help us is making relationships. It does not make relationships for us.

\*! The Two Most Important Methods of "has_secure_password"
`password equals`
Takes in a password and encrypts it for the users.
`authenticate`
Takes a password that the user types in and runs the encryption again to see if the result is the same as the stored password in the password_digest
If they're the same, the User object is returned, If they're not false is returned.
Rather than decrypting we run authenticate.

\*! How is it determined if the user is logged in?
We store some identifiable information about the user in a cookie using the session hash provided by Sinatra.
A Session Hash is a way of reading from and writing data to cookies that are sent along with requests.
The cookies are stored in the browser not on the server, but they do come along with requests to the server and the session hash is our server side

\*! What's bcrypt?
This is a dependency / gem
It is a dependency of `has_secure_password`
When we invoke `has_secure_password` it's going to use `bcrypt` to create an encrypted password based on the string that we typed in.

\*! What are the most important methods for has_secure_password ?  
`password=(password)`
This method takes an argument of a password (unencrypted) and uses it to creates new hashes which are salted (encrypted) password, this is an instance of the `BCrypt::Password Class`

`authenticate(test_password)`
This extracts the salt from the stored (encrypted password) and uses it to create a new password using `test_password`
If they are the same it returns the user (truthy)
If they are not the same it returns false

\*! When does password= get called?
It gets called when you create a new user
User.new(email: params[:email], password: params[:password])

`authenticate(test_password)` extracts the salt from the stored (encrypted) password and uses it to create a new password using test_password if those are the same it returns the user (truthy) and if they're not it returns false
password= gets called when you create a new user:

`validates` A way of attaching methods that run when the object is about to be saved to the db. If the object is invalid for any reason, the validator will add an error to the object.

User.new(email: params[:email], password: params[:password])

\*! What are the Four Elements Of The BCrypt::Password Class?

1.  Hashed Version
2.  Salt
3.  Version which was used
4.  Cost

\*! What's Cost?
This is a number that represents how much encryption we did
The higher the cost, the longer it will take to complete the encryption and create a hashed password but also the harder it will be the break.

\*! What's dotenv ?
This is goiing to allow us to create a file that we add to our git ignore
This will make it hide from git so it will not be tracked.
Then we create environment variables that we can define in this file and we load onto our application
This will make things like API keys or a session secret work securely but not be visible in our source code
We use this gem to load these things into the environment variable

\*! ENV['SESSION_SECRET']
We set the session secret in controller to thhis environmental variable

\*! session_secret_generator
This creates a cryptograph random string of hexadecimal characters which we can use for the session secret

\*! What's a render ?
A render is a response to an existing request.
You will still have access to the params and any instance variables defined within the route

\*! What's a redirect ?
A redirect sends a brand new get request
You will no longer have access to previous params or instance variables

\*! How To View Cookies?
`Inspect` => `Application Tab` => `Storage` => `Cookies`

\*! What is the method that renders a view called?
ERB (Embedded Ruby)

\*! How do you determine what is the error code when there is an error?
`Inspect` => `Network Tab` => `Status`

\*! What do we need to do to make sure Sinatra loads our Controllers?
Add the controllers to config.ru

\*! What is Sinatra based on?
Rails and Sinatra are both built on top of Rack

\*! What does every Rack app have?
A controller that is in listed in config.ru

\*! What file runs every time we make a request?
config.ru

\*! Why do we need additional controllers and how are they added?

run `ApplicationController`
use `UsersController`

The config.ru file determines what controllers actually respond to the request that we sent.
If we create a controller and the file gets loaded it's great
If we create a controller but don't add it to config.ru and have not used corneal scaffold

\*! Explain Session Hash
The Session Hash in the controller is a way of reading and interacting with data and cookies that are coming from the browser

\*!Explain Sessions and Server
There is nothing on the server that stores sessions
When you are logged in, it means you have an active cookie
If we want to have sessions stored on the server side we would need to have a table for that and
We would need to store information regarding log in, etc. Used in Banks.

When you are logged in, it means that you have a cookie that you're identified by.
Usually cookies are not set to expire.
Whenever we sent a request to a server, cookies are used for identification.

\*! Explain Layout File

 <!--app/views/layout.erb  -->

This is what Sinatra uses whenever we call the erb method.
We call the erb method whenever we render a template.
The layout file is a kind of container that we render the template into inside of yield.

\*! How Do We Make Navigation Links To Appear On Every Page?  
We can use a layout file and add navigation links above yield.
We add navigation links via `nav tags`.

```ruby
class Post < ActiveRecord::Base
    belongs_to :author, class_name: "User"
    validates :title, presence: true
    validates :content, presence: true
end
```

\*! Summary
`Adding class_name: "User"`
This tells ActiveRecord to find a User instance that's associated with a Post we call this method on, NOT an Author instance.

`The foreign_key author_id`
This is inferred from the fact that we have a belongs_to :author here  
If the foreign_key was something else we would also have to add foreign_key "something_else_id"

`validates` checks title and content to be present and if it's NOT present will not save it.

\*! DETAILED NOTES
If we do `belongs_to :author`
ActiveRecord is going to look for a foreign_key in the Post table called `author_id`
It is also going to look for a Constant / Class that's named `author`, which we don't have.
What we do have is a `User` class.

With `belongs_to` we can _specify the class name of an association_.

We only use this if the name can't be inferred from the association name.
belongs_to author will be linked by default to the author class
but if the real class name is User we have to specify that with this option.

Now we can call author on a post and we're going to get the User who wrote it.
Now we can name a method how we'd like and retrieve the right objects.

When belongs_to is invoked the main 2 assumptions that can override are `Class Name` and `Foreign Key`
Class Name indicates what the foreign key points to. What instance of what class we're trying to get.
Foreign Key indicates which column in this table is associated with this class.  
Source Key is only present in `has_many :model1, through: :model2`

\*! QUESTION: When do we want to override Class Name and Foreign Key?  
When we're in a situation where being without it, doesn't tell ActiveReocrd
everything it needs to know to give us what we want to get back

`"User"` is a string because it's the name of the Class. Refers to `const_get`

**_All of The Methods That `has_many` and `belongs_to` Makes Are Instance Methods_**

\*! What's The Difference Between a redirect and a render ` `render` => erb is used to generate a response to an existing request. An instance variable that's defined in a controller action will be accessible to the view we render.

`redirect` => Brand new request response cycle

\*! RESTFUL ACTIONS (They Follow a Pattern)  
INDEX
NEW
CREATE
SHOW
EDIT
UPDATE
DESTROY

\*! Whenever You Have a `Route Not Found Error`, There Could Be 2 Potential Problems
Route NOT defined yet
We made a request to the WRONG ROUTE

_! Flash
This is session based messages  
Displaying error after redirect by storing the error
_/
