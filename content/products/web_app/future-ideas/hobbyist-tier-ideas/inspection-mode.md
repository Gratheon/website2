---
title: "🎙️ Inspection mode"
---

## Why

During a manual hive inspection, the beekeeper is standing in the apiary with open hives, gloves, hive tools, smoke, bees, and limited attention. The app should not require many precise clicks while the beekeeper is handling frames.

Inspection mode is a field-first, wizard-like UX for recording an inspection with minimal touch interaction. It should help the beekeeper capture voice notes, frame photos, and hive observations while staying focused on the bees.

## Concept

Inspection mode is started from a specific hive and guides the beekeeper through the inspection step by step. It complements the existing [Inspection management](../../hobbyist-tier/inspection-management.md) feature by making data capture easier during the field visit, before the inspection is reviewed and stored for long-term comparison:

1. Select or confirm the hive being inspected.
2. Start a new inspection session.
3. Walk through boxes and frames in the expected order.
4. Capture frame-side photos with clear prompts.
5. Record speech-to-text notes and attach them to the relevant hive, box, frame, or whole inspection.
6. Review a short summary at the end.
7. Save the inspection snapshot for historical comparison.

The main design goal is to make the app useful while the beekeeper has little time for clicking and may be using only one hand.

## Field UX requirements

- Large buttons that can be tapped with gloves.
- Wizard-like next step guidance: `Next frame`, `Flip frame`, `Next box`, `Finish inspection`.
- Minimal required text input.
- Speech-to-text voice notes for quick observations, for example queen seen, brood pattern looks weak, feed needed, varroa signs, hive temperament.
- Voice notes should keep both transcript and original audio when possible, so unclear transcription can be reviewed later.
- Photo-taking flow should guide the beekeeper through frame sides in the same order as the hive model.
- The current target should be obvious: hive, box, frame number, side, and expected photo direction.
- A skipped frame or side should be explicitly recorded instead of silently missing data.
- The flow should tolerate interruptions, for example closing the hive quickly because of weather or aggressive bees.

## Voice-controlled photo taking

As a future enhancement, the beekeeper should be able to control the camera by voice while holding a frame:

- `Take photo` captures the current frame side.
- `Retake photo` replaces the last photo.
- `Next side` moves from left side to right side.
- `Next frame` advances to the next frame in the wizard.
- `Add note ...` records an observation and attaches it to the current context.
- `Finish inspection` starts the final review step.

Voice control should be optional. The same actions must remain available through large touch controls.

## Photo capture wizard

For each frame, the app should guide the beekeeper through a predictable sequence:

1. Show the target frame position and side.
2. Open the camera.
3. Help the beekeeper align the frame if possible.
4. Capture or accept a photo.
5. Ask whether the other side should be captured.
6. Continue to the next frame.

The wizard should reduce incorrectly assigned photos by attaching each photo to the currently selected frame side automatically.

## Data captured

Inspection mode should create or update an inspection session that can contain:

- Hive snapshot timestamp.
- Box and frame order at the time of inspection.
- Frame-side photos.
- Voice notes and transcripts.
- Structured quick observations.
- Skipped frames or skipped photo reasons.
- Review state: draft, completed, or aborted.

## MVP acceptance criteria

- User can start `Inspection mode` from a hive view.
- User is guided through the hive's existing boxes, frames, and frame sides.
- User can take a photo for the currently prompted frame side.
- User can skip a frame side with a reason.
- User can dictate a voice note and see the generated transcript.
- Notes are attached to the current inspection context.
- User can finish the wizard and create an inspection record.
- User can later open the inspection and see captured photos, notes, and skipped items.
- User can review and edit transcripts after the field visit before treating the inspection as final.

## Open questions

- Should speech-to-text run on device, in browser, or on the server?
- Should the app support offline capture and upload later?
- Which voice commands are reliable enough in noisy apiary conditions?
- Should photos be captured directly in the web app or delegated to the native camera app?
- Should Inspection mode support multiple beekeepers working on the same apiary visit?
