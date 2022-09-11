// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  return buttons.reduce(
    (state, button) => (button === state ? Nothing : button),
    Nothing
  );
}
