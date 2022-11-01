1. New Opportunity Wizard
Create a multi-screen component for the sales users to create Account, contact,
opportunity, and opportunity line items.
   Screen 1: Provide an option to the user to either select an existing account or create a
new account. If the user goes for an existing account, then a lookup field should appear
for account selection.
If the user goes for a new account, then the required fields should appear for input. On
clicking on the next button second screen would appear.
   Screen 2: At this level, we have an account record Id. on this screen we need to provide
an option to the user to either select existing contact or create a new one. In the existing
scenario, we need to only display contacts associated with the account selected in the
previous screen.
In the case of a new contact, required input fields should appear. This newly created
contact should be associated with the account selected or created in the previous
screen. On clicking on the next button third screen would appear.
   Screen 3: In this screen, Opportunity Name, Stage Name, Close Date, Description,
Account, and Primary Contact fields should be available for input. Account and Primary
Contact should be auto-populated with the read-only mode as the user already selected
or created in the previous screen. On clicking on the next button fourth screen would
appear.
  Screen 4: On this screen, the user would be able to select products.
Users can select either one or multiple products on this screen. Based on the product
selection next screen would appear to edit other line items values.
Screen 5: On this screen, we need to provide options to edit some of the opportunity
line item's field values.
On Save, an opportunity would be created with the selected Account, Primary Contact,
and Products as opportunity line items.
