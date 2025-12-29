# Feature Documentation Templates

This directory contains templates for documenting Gratheon features. Use these templates to maintain consistency across all feature documentation.

## Templates

### feature-marketing-template.md
**Purpose**: User-facing feature pages for marketing and product documentation
**Location**: Use in `/about/products/web_app/[tier]/`
**Audience**: Beekeepers, potential users, product managers

**When to use**:
- Describing what a feature does for users
- Explaining benefits and value propositions
- Showing demos and use cases
- Guiding users on how to use features

**Key sections**:
- Purpose (1-2 sentences, user-focused)
- User Story (role, action, benefit)
- Key Benefits (bulleted, value-focused)
- Demo (video or screenshots)
- Use Cases (real-world scenarios)
- How to Use (simple steps)
- Link to technical documentation

### feature-template.md (Legacy)
**Status**: Deprecated - use feature-marketing-template.md instead
**Note**: Contains both marketing and technical content mixed together

## Usage

### Creating a New Marketing Feature Page

1. Copy the template:
```bash
cp feature-marketing-template.md ../../web_app/[tier]/[feature-name].md
```

2. Fill in the sections:
   - Replace `[Feature Name]` with actual feature name
   - Update status to `complete`, `in-progress`, or `planned`
   - Write user-focused purpose (avoid technical jargon)
   - Create user story from beekeeper perspective
   - List 3-6 key benefits with bold titles
   - Add demo video or screenshots
   - Describe 2-3 real-world use cases
   - Write simple how-to steps
   - Link to corresponding technical doc

3. Update metadata:
   - Set correct `status` in frontmatter
   - Update `Last Updated` date

4. Create corresponding technical doc:
   - See `/docs/web-app/_templates/` for technical template
   - Link both documents together

## Guidelines

### Writing Style
- **Be concise**: Short sentences, clear language
- **User-focused**: Benefits over features
- **Action-oriented**: Tell users what they can do
- **No technical jargon**: Avoid terms like "mutation", "schema", "API"
- **Positive tone**: Emphasize possibilities, not limitations

### What NOT to Include in Marketing Pages
- Database schemas
- API specifications
- Code examples
- Architecture diagrams
- Implementation details
- Performance metrics (unless user-relevant)
- Technical limitations (save for technical docs)

### Cross-Linking
Always link to technical documentation at the end:
```markdown
### 📖 Learn More
For technical implementation details, see [Feature Name Technical Documentation](../../../../docs/web-app/features/feature-slug.md)
```

## Examples

See these refactored examples:
- [Split Bee Colony](../web_app/starter-tier/split_bee_colony.md) - Complex feature with visual selection
- [Join Bee Colonies](../web_app/starter-tier/join_bee_colonies.md) - Complex feature with options
- [User Login](../web_app/basic-functionality/🧑‍🚀%20User%20login.md) - Simple authentication feature

## Questions?

Refer to `/Users/artjom/git/WEBSITE_REFACTORING_COMPLETE.md` for full refactoring guidelines and structure.

