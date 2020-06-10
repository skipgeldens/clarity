---
title: Overview
---

# Login Page

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/login#top)
- [Design Guidelines](/documentation/login#guidelines)

##### The login page is a predefined form for applications that require authentication.

Use Clarity’s login form by extending the `.login` classname on `form` and wrapping it in a container extending the `.login-wrapper` class.

###### .title, .subtitle and .trademark

Extend the `.title` and `.subtitle` class on labels indicating the product title and subtitle. If your product title has the trademark symbol, make sure to wrap the trademark symbol in a `span` with the `.trademark` class on it.

###### .username

Extend the `.username` class on the username input field.

###### .password

Extend the `.password` class on the password input field.

###### .error, .active

This wrapper contains a validation message. Extend the `.active` class with `.error` to display the validation message.

#### Example

### Welcome to

Company Product Name

##### Use your Company ID to sign in or create one now

User Role

Local UsersAdministrator

Username

Password

Show

Remember me

Invalid user name or password

NEXT[Sign up for a Company ID](javascript://)

```html
<div class="login-wrapper">
  <form class="login">
    <section class="title">
      <h3 class="welcome">Welcome to</h3>
      Company Product Name
      <h5 class="hint">Use your Company ID to sign in or create one now</h5>
    </section>
    <div class="login-group">
      <clr-select-container>
        <label class="clr-sr-only">User Role</label>
        <select clrSelect name="type" [(ngModel)]="form.type">
          <option value="local">Local Users</option>
          <option value="admin">Administrator</option>
        </select>
      </clr-select-container>
      <clr-input-container>
        <label class="clr-sr-only">Username</label>
        <input type="text" name="username" clrInput placeholder="Username" [(ngModel)]="form.username" />
      </clr-input-container>
      <clr-password-container>
        <label class="clr-sr-only">Password</label>
        <input type="password" name="password" clrPassword placeholder="Password" [(ngModel)]="form.password" />
      </clr-password-container>
      <clr-checkbox-wrapper>
        <label>Remember me</label>
        <input type="checkbox" name="rememberMe" clrCheckbox [(ngModel)]="form.rememberMe" />
      </clr-checkbox-wrapper>
      <div class="error active">
        Invalid user name or password
      </div>
      <button type="submit" class="btn btn-primary">NEXT</button>
      <a href="javascript://" class="signup">Sign up for a Company ID</a>
    </div>
  </form>
</div>
```

### Usage

This component provides a complete login experience.

To customize the login page, remove the elements you don’t need, per your use case. For example, your app may require fewer fields.

#### Validation

Validation occurs on submit. If the user enters an incorrect user name or password, a validation message appears below the password field.

For security reasons, Clarity does not call out whether the error occurred in the user name or password field. The validation message text should indicate this situation; for example, “The user name or password is incorrect.”

#### Accessibility

In order to facilitate screen readers, you should still include label elements in the form controls. We provide the `clr-sr-only` class to add to the label to move it offscreen, which keeps the visual experience as you see above while still helping screen readers understand what the form controls are for.

#### Responsiveness

The layout adapts to different screen sizes at 768px and 544px.
