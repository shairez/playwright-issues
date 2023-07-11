import { test, expect } from '@playwright/experimental-ct-react';
import { CompWithLink } from '../components/routed-comp';

test('This test fails without showing the true reason why ', async ({ mount }) => {
  const component = await mount(<CompWithLink />);
  await expect(component).toContainText('CompWithLink');

  // This test 👆 fails because it can't deal with the <Link> component
  // without an error message this problem is super hard to track down
});

test('But this test is passing because of the wrapping of the component', async ({ mount }) => {
  const component = await mount(<CompWithLink />, {hooksConfig: {enableRouting: true}});
  await expect(component).toContainText('CompWithLink');

});