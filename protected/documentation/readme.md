# Goal

A blog is differentiated from a wiki not by how it works but in general by what sort of information you put in there. Blogs are meant to be "lighter weight", easy to consume etc. A wiki on the other hand is meant to describe a subject in full.

Nabu already comes with a wiki where hierarchical structure is important. The wiki is generally also backed by an actual file system which may or may not synchronize from git.
The blog component differs from the wiki because it uses tags as its primary taxonomy. Apart from the tags, its a long list of articles. It also lives primarily in the database though an export for git-compatibility is of course possible.
The default node versioning is enabled on posts though, so there is some history being kept as well.

However, even though it is named "blog", it is not meant to only support "lighter weight" content but can be used as a substitute for the wiki.

Currently it is focused on markdown syntax though it requires a slightly more technical audience to create blog entries. In the future we might add support for WYSIWYG editing.

It was a cointoss to call this module "article" as it is more generic than a blog, but early on this name was picked and I stuck with it.