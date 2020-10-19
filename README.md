# audio-described-navigation
Audio described navigation via website

# Using
Just add audio-describe.js to your website

# Describe elements

## aria-label

```html
<a href="#" aria-label="Pricing">Pricing</a>
```

## aria-labelledby
```html
<p id="pricingLabel">Go to pricing options page</p>
<a href="#" aria-labelledby="pricingLabel">Pricing</a>
```

## aria-describedby
```html
<label for="exampleInputEmail1">Email address</label>
<input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
```

## forms 
<input type="checkbox" id="exampleCheck1">
<label for="exampleCheck1">Check me out</label>

# Demo
https://webroad.pl/demo/audio-described-navigation
