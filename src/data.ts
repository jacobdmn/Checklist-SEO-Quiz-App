const checklists = [
  {
    title: "General Checklist",
    description:
      "Use these general conversion design recommendations to increase your conversion rate and revenue.",
    questions: [
      {
        questionTitle: "Does your customer experience meet the following?",
        options: [
          {
            optionTitle: "Mobile-Optimized Website",
            optionDescription: [
              "Mobile Responsive Layout",
              "Easy To Read",
              "Fast Page Load Speed",
            ],
          },
          {
            optionTitle:
              "Clear Information Hierarchy (Most Important Info First)",
            optionDescription: [],
          },
          {
            optionTitle:
              "Copy Structure: F-Pattern (use if heavy on text) vs Z-Pattern (light on text)",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Does your content meet the following?",
        options: [
          {
            optionTitle: "Messaging",
            optionDescription: [
              "Headline is unique, specific & meaningful",
              "Communicate brand vision, story, values",
              "Using product benefits & product features",
              "Most important benefits have their own section",
            ],
          },
          {
            optionTitle: "Readability",
            optionDescription: [
              "Simple words",
              "Short paragraphs",
              "Bullet or number points instead of long text",
            ],
          },
          {
            optionTitle: "Imagery/ Video",
            optionDescription: [
              "Imagery communicates the benefits of your offer",
              "Include offer explainer video",
            ],
          },
          {
            optionTitle:
              "Consistency: Clear Brand Style Across Ads, Website & Landing Pages",
            optionDescription: ["Same Fonts", "Same Colors", "Same Styles"],
          },
        ],
      },
      {
        questionTitle: "Do you remove buying resistance with the following?",
        options: [
          {
            optionTitle: "Use of guarantees, warranties, free returns",
            optionDescription: [],
          },
          {
            optionTitle:
              "Option of multiple payment methods (PayPal, AfterPay, Credit Card etc.)",
            optionDescription: [],
          },
          {
            optionTitle: "Use of testimonials",
            optionDescription: [
              "Highlight key details in testimonials",
              "Each testimonial has personal details",
            ],
          },
        ],
      },
      {
        questionTitle: "Have you designed for trust?",
        options: [
          {
            optionTitle: "Trust Building Design Elements",
            optionDescription: [],
          },
          {
            optionTitle: "Key selling points represented by icons",
            optionDescription: [],
          },
          {
            optionTitle:
              "Use Of Trust Badges (Payment Gateway, Delivery Service, Shopify Secure etc.)",
            optionDescription: [],
          },
          {
            optionTitle:
              "Include logos (Desaturate) of 3rd party affiliations / media appearances",
            optionDescription: [],
          },
          {
            optionTitle: "Include number of users/ buyers (if large)",
            optionDescription: [],
          },
          {
            optionTitle: "Include awards, ratings, social shares",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you optimize to drive action?",
        options: [
          {
            optionTitle: "Call To Action",
            optionDescription: [
              "Clear call to action",
              "Boldest color for CTA buttons",
              "Twice the size & font weight of body text",
              "Directional cues like eye gaze or arrows to CTA buttons",
              "Directional cues like eye gaze or arrows to CTA buttons",
              "CTAs in their own clear space",
              "CTAs are enticing to click",
              "CTA after each content section",
            ],
          },
          {
            optionTitle: "Create Urgency / Scarcity",
            optionDescription: [
              "Timer",
              "Coupons",
              "Low stock alert / How many people currently have in cart",
              "Exit intent pop-up with incentive in exchange for email",
            ],
          },
          {
            optionTitle: "Lead Generation",
            optionDescription: [
              "Use multi-step forms (if lots of info needed)",
              "Share why data is needed",
              "Explain data privacy",
            ],
          },
        ],
      },
      {
        questionTitle: "Do you have an optimized offer?",
        options: [
          {
            optionTitle: "Catchy offer name",
            optionDescription: [],
          },
          {
            optionTitle: "Product Photography",
            optionDescription: [
              "High-quality studio shots",
              "Show products from various angles",
              "Capture important Product Elements",
              "Show How Your Customers Use Your Product",
              "Reveal Facts Through Graphic Edits",
            ],
          },
          {
            optionTitle: "Product Description",
            optionDescription: [
              "Explain Who It’s For",
              "Why To Use It",
              "Provide Full Specifications (Sizing, Dimensions, Materials etc.)",
              "Product Use and Care Guidelines",
            ],
          },
          {
            optionTitle: "Unique Product Add-Ons",
            optionDescription: [],
          },
          {
            optionTitle: "Easy Shipping & Return Policy",
            optionDescription: [],
          },
          {
            optionTitle: "Upsells, Crossells, Downsells",
            optionDescription: [
              "Product Bundling",
              "In-Cart Upsells",
              "Post Purchase One-Click Upsells",
            ],
          },
          {
            optionTitle:
              "Wingman Method (Increase Perceived Value By Strategic Pricing Of Other Products)",
            optionDescription: [],
          },
        ],
      },
    ],
  },
  {
    title: "Landing Pages",
    description:
      "Use these 17 design recommendations to increase your revenue and conversion rate at the landing page stage.",
    questions: [
      {
        questionTitle:
          "Is your home page structured to address the following 7 key elements?",
        options: [
          {
            optionTitle:
              "Awareness - immediately & clearly show what problem you solve, or what your offer is.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Education - educate your visitors on the problem, the solution, the outcome, and how your offer works. Simulate the experience you offer for them.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Motivation - motivate your audience to take action now.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Intention - clearly show your visitors an easy pathway for them to take exactly the action you want them to take.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Trusting - show your visitors why they can trust you and be confident you will solve their problem or give them the outcome they want.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Action - clearly ask your visitors to take the action you want them to take. Aim to make your home page have one primary call to action.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Maintaining - incentivize your visitors to share their email with you. Use exit intent pop ups.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Is your offer immediately clear? Do you immediately concentrate your visitors on exactly what problem you solve for them or what value you provide?",
        options: [
          {
            optionTitle: `
            Clarity and relevance make or break your landing page. Visitors spend just seconds looking at a page before determining its usefulness and relevance. If they can’t immediately understand what you do for them or offer them, or if your site has functional or usability problems, they will abandon the page.
Rather than let that happen, make the few seconds of their attention that you do have count. Remember to make sure the messaging in the ad that brought them to your page matches the messaging on your page.

`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Is your landing page simplified, with a maximum of 5 elements above the fold?",
        options: [
          {
            optionTitle:
              "Above the fold is the top and first content block visitors see. Aim to have five main elements above the fold. For example, your logo, a pleasing but subtle visual, a headline expressing what your offer is, some sub-text explaining the offer, and finally the CTA.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you use effortless CTA copy?",
        options: [
          {
            optionTitle: `
              Is your CTA button copy value-focused? Or is it effort-focused?
Value-focused CTAs use words that appeal to lazy people (aka everyone) — receive, get, view, enjoy, discover, see, or play.
Effort-focused CTAs use action words that subconsciously make visitors think they have to work, such as submit, start, activate, learn, pay, earn or go.
Who should you appeal to? Lazy people.
Make it as effortless and easy as possible for your visitor to receive your offer.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you use colour contrasting, especially with your CTA?",
        options: [
          {
            optionTitle:
              "Make sure your CTA is more pronounced and clearer than every other element on your page. Use negative space between the CTA and the rest of the elements. ",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you use directional cues to point your visitors towards the desired action?",
        options: [
          {
            optionTitle:
              "Whether it’s an obvious or subtle one, try to incorporate a directional cue towards your CTAs. You can help draw your audience’s attention to an intentional spot on the page.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Does your landing page have minimal distractions?",
        options: [
          {
            optionTitle:
              "Identify any elements that do not move your consumers to take the desired action, then remove those elements – keep decision-making simple for the consumer. Here is a few common elements that can be removed: Top or sidebar navigation bar, off-page links, excessive movements, animations or pop-ups, footers or social media links, non-relevant content & CTAs.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "Social proof plays such a significant role in decision-making. Visitors carefully read reviews on the store, visit external websites with independent reviews, follow influencers, etc. They heavily rely on social proof. So it’s critical to show such elements on the landing page. It can be overall reviews, awards, certifications, logos of well-known media, etc.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you have any scarcity and urgency triggers?",
        options: [
          {
            optionTitle: `Exclusivity, limited products and time-bound offers stimulate visitors to act fast, and not put it off for later. Highlight the scarcity element prominently on the landing page. Visitors should understand they can miss it, so it will stimulate the Fear Of Missing Out (FOMO) feeling.`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you have positive, confidence building elements near your CTA?",
        options: [
          {
            optionTitle: `Things that are close to your CTA should instill confidence in your visitors. For that reason, keep things that may invite negative thinking away from your CTA button.
              For instance, having the word “spam” near your form button will trigger negative thinking, even if you’re trying to assure your audience that you won’t spam them.
              `,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you have positive, confidence building elements near your CTA?",
        options: [
          {
            optionTitle: `Things that are close to your CTA should instill confidence in your visitors. For that reason, keep things that may invite negative thinking away from your CTA button.
For instance, having the word “spam” near your form button will trigger negative thinking, even if you’re trying to assure your audience that you won’t spam them.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you address the main concerns or questions of your visitors?",
        options: [
          {
            optionTitle: `Gather together any objections a potential customer may have then answer the concerns or questions your visitors might have about your offer.
Address and overcome those objections by communicating the benefits of your offer.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you use clean design?",
        options: [
          {
            optionTitle:
              "Use white space principles and remove any clutter. Visually, this will help your visitors focus on your offer.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you use easy readability?",
        options: [
          {
            optionTitle: `
              In addition to keeping your content simple, make it easy to read.
Break up copy with numbers, use minimal copy, segment your copy into visual side-by-side chunks, use bullets when appropriate, use large and legible fonts, use images wisely and don’t make people read too far across the page.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you use video? ",
        options: [
          {
            optionTitle: `This one takes up more time, effort and resources to produce explainer videos. If you have the budget and opportunity to do so, use video to explain what your company offers.`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Is your Thank You page optimized?",
        options: [
          {
            optionTitle: `Don’t forget about what happens after your visitors take action on your landing page. Depending on your business, you can add exploratory links to your Thank You page — social shares, nav bars, windows to more info on your products, or even another offer.
Another great element to think about, is using this page to incentivize referrals. This makes your growth exponential rather than proportionate to the traffic & initial conversions you generate on your landing page.
`,
            optionDescription: [],
          },
        ],
      },
    ],
  },
  {
    title: "Home Pages",
    description:
      "Use these 11 design recommendations to increase your conversion rate & revenue at the home page stage.",
    questions: [
      {
        questionTitle:
          "Do you have a visually simple, not overloaded home page?",
        options: [
          {
            optionTitle:
              "The more complex the design of a home page, the more effort it requires for your visitors to process all the information on it. Bombard your shoppers with overloaded designs and they will bounce from your website. So keep your home page design as minimal as possible. Get rid of unnecessary images, texts, elements. Use a lot of white-space.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Is your home page structured to address the following 7 key elements?",
        options: [
          {
            optionTitle:
              "Awareness - immediately & clearly show what problem you solve, or what your offer is.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Education - educate your visitors on the problem, the solution, the outcome, and how your offer works. Simulate the experience you offer for them.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Motivation - motivate your audience to take action now.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Intention - clearly show your visitors an easy pathway for them to take exactly the action you want them to take.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Trusting - show your visitors why they can trust you and be confident you will solve their problem or give them the outcome they want.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Action - clearly ask your visitors to take the action you want them to take. Aim to make your home page have one primary call to action.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Maintaining - incentivize your visitors to share their email with you. Use exit intent pop ups.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you immediately concentrate your visitors on exactly what problem you solve for them or what value you provide?",
        options: [
          {
            optionTitle: `
            Clarity and relevance make or break your home page. Visitors spend just seconds looking at a page before determining its usefulness and relevance. If they can’t immediately understand what you do for them or offer them, or if your site has functional or usability problems, they will abandon the page.
Rather than let that happen, make the few seconds of their attention that you do have count.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you highlight any deals and special offers?",
        options: [
          {
            optionTitle:
              "The faster you drive visitors into a shopping mode, the easier it will be to convert them into customers. Highlighting special deals, current promotion, bundles and discounts can lure shoppers and encourage them to buy something. That's why you should have dedicated sections for that, it should be eye- catching and have clear CTAs.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you show a recently viewed items section for returning users?",
        options: [
          {
            optionTitle:
              "This is a very useful section for shoppers that already visited the website and browsed any products. For such returning visits it will be a very good starting point for shopping. Also it will help to personalize your home page. But, of course, this applies to those shops with a large number of returning visitors.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "When shoppers know that you offer good shipping conditions, convenient return and refund policies, fast customer support and other similar things, they will know that it's safe to buy here, it will remove all fears and concerns. Therefore, you need to have dedicated section highlighting all that stuff on the home page (and site-wide too, you should always remind about it)",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "Social proof plays such a significant role in decision-making. Shoppers carefully read reviews on the store, visit external websites with independent reviews, follow influencers, etc. They  heavily rely on social proof. So it’s critical to start showing such elements on the home page. It can be overall reviews, awards, certifications, logos of well-known media, etc. ",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you have any scarcity and urgency triggers? (relevant for stores with time-bound offers)",
        options: [
          {
            optionTitle:
              "Exclusivity, limited products and time-bound offers stimulate shoppers to act fast, and not put it off for later. Home pages are a good place to set such expectations that will motivate users to go faster down the funnel. So if you have any limited or exclusive offers, highlight them prominently on the home page. Shoppers should understand they can miss it, so it will stimulate Fear Of Missing Out (FOMO) feeling.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Is your page easy to Navigation",
        options: [
          {
            optionTitle:
              "Your website’s navigation structure has a huge impact on conversions, sales, and bounce rates. If visitors can’t figure out where to find what they want, they’ll leave. Start with this rule of thumb: Your website navigation structure should allow someone to land on any page on your site and find what they need within 3 clicks.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Home page",
        options: [
          {
            optionTitle: `What do you sell? Who is it for? Why is it right for me? What does your brand stand for?
If customers can’t discern that in seconds, they’ll leave your store. For those that do stay, make their journey simple. What’s the one action you want somebody to take from your homepage? Make it your one main call-to-action (CTA).
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Assist Shoppers In Refining Their Search Results With Filters On The Results Page",
        options: [
          {
            optionTitle:
              "If you have an eCommerce store that carries a large number of similar products, filters help people find specific results. If they can’t quickly find what they’re looking for, they will most likely take their business elsewhere. By helping users find what they’re looking for, filters can increase your site’s revenue.",
            optionDescription: [],
          },
        ],
      },
    ],
  },
  {
    title: "Product Pages",
    description:
      "Use these 11 design recommendations to increase your conversion rate & revenue at the home page stage.",
    questions: [
      {
        questionTitle:
          "Do you have a visually simple, not overloaded home page?",
        options: [
          {
            optionTitle:
              "The more complex the design of a home page, the more effort it requires for your visitors to process all the information on it. Bombard your shoppers with overloaded designs and they will bounce from your website. So keep your home page design as minimal as possible. Get rid of unnecessary images, texts, elements. Use a lot of white-space.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Is your home page structured to address the following 7 key elements?",
        options: [
          {
            optionTitle:
              "Awareness - immediately & clearly show what problem you solve, or what your offer is.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Education - educate your visitors on the problem, the solution, the outcome, and how your offer works. Simulate the experience you offer for them.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Motivation - motivate your audience to take action now.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Intention - clearly show your visitors an easy pathway for them to take exactly the action you want them to take.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Trusting - show your visitors why they can trust you and be confident you will solve their problem or give them the outcome they want.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Action - clearly ask your visitors to take the action you want them to take. Aim to make your home page have one primary call to action.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Maintaining - incentivize your visitors to share their email with you. Use exit intent pop ups.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you immediately concentrate your visitors on exactly what problem you solve for them or what value you provide?",
        options: [
          {
            optionTitle: `
            Clarity and relevance make or break your home page. Visitors spend just seconds looking at a page before determining its usefulness and relevance. If they can’t immediately understand what you do for them or offer them, or if your site has functional or usability problems, they will abandon the page.
Rather than let that happen, make the few seconds of their attention that you do have count.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you highlight any deals and special offers?",
        options: [
          {
            optionTitle:
              "The faster you drive visitors into a shopping mode, the easier it will be to convert them into customers. Highlighting special deals, current promotion, bundles and discounts can lure shoppers and encourage them to buy something. That's why you should have dedicated sections for that, it should be eye- catching and have clear CTAs.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you show a recently viewed items section for returning users?",
        options: [
          {
            optionTitle:
              "This is a very useful section for shoppers that already visited the website and browsed any products. For such returning visits it will be a very good starting point for shopping. Also it will help to personalize your home page. But, of course, this applies to those shops with a large number of returning visitors.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "When shoppers know that you offer good shipping conditions, convenient return and refund policies, fast customer support and other similar things, they will know that it's safe to buy here, it will remove all fears and concerns. Therefore, you need to have dedicated section highlighting all that stuff on the home page (and site-wide too, you should always remind about it)",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "Social proof plays such a significant role in decision-making. Shoppers carefully read reviews on the store, visit external websites with independent reviews, follow influencers, etc. They  heavily rely on social proof. So it’s critical to start showing such elements on the home page. It can be overall reviews, awards, certifications, logos of well-known media, etc. ",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you have any scarcity and urgency triggers? (relevant for stores with time-bound offers)",
        options: [
          {
            optionTitle:
              "Exclusivity, limited products and time-bound offers stimulate shoppers to act fast, and not put it off for later. Home pages are a good place to set such expectations that will motivate users to go faster down the funnel. So if you have any limited or exclusive offers, highlight them prominently on the home page. Shoppers should understand they can miss it, so it will stimulate Fear Of Missing Out (FOMO) feeling.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Is your page easy to Navigation",
        options: [
          {
            optionTitle:
              "Your website’s navigation structure has a huge impact on conversions, sales, and bounce rates. If visitors can’t figure out where to find what they want, they’ll leave. Start with this rule of thumb: Your website navigation structure should allow someone to land on any page on your site and find what they need within 3 clicks.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Home page",
        options: [
          {
            optionTitle: `What do you sell? Who is it for? Why is it right for me? What does your brand stand for?
If customers can’t discern that in seconds, they’ll leave your store. For those that do stay, make their journey simple. What’s the one action you want somebody to take from your homepage? Make it your one main call-to-action (CTA).
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Assist Shoppers In Refining Their Search Results With Filters On The Results Page",
        options: [
          {
            optionTitle:
              "If you have an eCommerce store that carries a large number of similar products, filters help people find specific results. If they can’t quickly find what they’re looking for, they will most likely take their business elsewhere. By helping users find what they’re looking for, filters can increase your site’s revenue.",
            optionDescription: [],
          },
        ],
      },
    ],
  },
  {
    title: "Cart Pages",
    description:
      "Use these 11 design recommendations to increase your conversion rate & revenue at the home page stage.",
    questions: [
      {
        questionTitle:
          "Do you have a visually simple, not overloaded home page?",
        options: [
          {
            optionTitle:
              "The more complex the design of a home page, the more effort it requires for your visitors to process all the information on it. Bombard your shoppers with overloaded designs and they will bounce from your website. So keep your home page design as minimal as possible. Get rid of unnecessary images, texts, elements. Use a lot of white-space.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Is your home page structured to address the following 7 key elements?",
        options: [
          {
            optionTitle:
              "Awareness - immediately & clearly show what problem you solve, or what your offer is.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Education - educate your visitors on the problem, the solution, the outcome, and how your offer works. Simulate the experience you offer for them.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Motivation - motivate your audience to take action now.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Intention - clearly show your visitors an easy pathway for them to take exactly the action you want them to take.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Trusting - show your visitors why they can trust you and be confident you will solve their problem or give them the outcome they want.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Action - clearly ask your visitors to take the action you want them to take. Aim to make your home page have one primary call to action.",
            optionDescription: [],
          },
          {
            optionTitle:
              "Maintaining - incentivize your visitors to share their email with you. Use exit intent pop ups.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you immediately concentrate your visitors on exactly what problem you solve for them or what value you provide?",
        options: [
          {
            optionTitle: `
            Clarity and relevance make or break your home page. Visitors spend just seconds looking at a page before determining its usefulness and relevance. If they can’t immediately understand what you do for them or offer them, or if your site has functional or usability problems, they will abandon the page.
Rather than let that happen, make the few seconds of their attention that you do have count.
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you highlight any deals and special offers?",
        options: [
          {
            optionTitle:
              "The faster you drive visitors into a shopping mode, the easier it will be to convert them into customers. Highlighting special deals, current promotion, bundles and discounts can lure shoppers and encourage them to buy something. That's why you should have dedicated sections for that, it should be eye- catching and have clear CTAs.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you show a recently viewed items section for returning users?",
        options: [
          {
            optionTitle:
              "This is a very useful section for shoppers that already visited the website and browsed any products. For such returning visits it will be a very good starting point for shopping. Also it will help to personalize your home page. But, of course, this applies to those shops with a large number of returning visitors.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "When shoppers know that you offer good shipping conditions, convenient return and refund policies, fast customer support and other similar things, they will know that it's safe to buy here, it will remove all fears and concerns. Therefore, you need to have dedicated section highlighting all that stuff on the home page (and site-wide too, you should always remind about it)",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Do you show any social proof?",
        options: [
          {
            optionTitle:
              "Social proof plays such a significant role in decision-making. Shoppers carefully read reviews on the store, visit external websites with independent reviews, follow influencers, etc. They  heavily rely on social proof. So it’s critical to start showing such elements on the home page. It can be overall reviews, awards, certifications, logos of well-known media, etc. ",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Do you have any scarcity and urgency triggers? (relevant for stores with time-bound offers)",
        options: [
          {
            optionTitle:
              "Exclusivity, limited products and time-bound offers stimulate shoppers to act fast, and not put it off for later. Home pages are a good place to set such expectations that will motivate users to go faster down the funnel. So if you have any limited or exclusive offers, highlight them prominently on the home page. Shoppers should understand they can miss it, so it will stimulate Fear Of Missing Out (FOMO) feeling.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Is your page easy to Navigation",
        options: [
          {
            optionTitle:
              "Your website’s navigation structure has a huge impact on conversions, sales, and bounce rates. If visitors can’t figure out where to find what they want, they’ll leave. Start with this rule of thumb: Your website navigation structure should allow someone to land on any page on your site and find what they need within 3 clicks.",
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle: "Home page",
        options: [
          {
            optionTitle: `What do you sell? Who is it for? Why is it right for me? What does your brand stand for?
If customers can’t discern that in seconds, they’ll leave your store. For those that do stay, make their journey simple. What’s the one action you want somebody to take from your homepage? Make it your one main call-to-action (CTA).
`,
            optionDescription: [],
          },
        ],
      },
      {
        questionTitle:
          "Assist Shoppers In Refining Their Search Results With Filters On The Results Page",
        options: [
          {
            optionTitle:
              "If you have an eCommerce store that carries a large number of similar products, filters help people find specific results. If they can’t quickly find what they’re looking for, they will most likely take their business elsewhere. By helping users find what they’re looking for, filters can increase your site’s revenue.",
            optionDescription: [],
          },
        ],
      },
    ],
  },
];
export default checklists;
