# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

[Custom foo description](#foo)


### Code

`code`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```
{
  "firstName": "Johnny",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^

```cpp
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n= nums.size();
        int x=-1 , y=-1;
        for(int i=n-2;i>=0;i--){
            if(nums[i+1]>nums[i]){
                x=i;
                break;
            }
        }
        if(x==-1){
            reverse(nums.begin(), nums.end());
            return;
        }
        for(int i=n-1;i>=x;i--){
            if(nums[i] > nums[x]){
                 y=i;
                break;
            }
        }
        swap(nums[x], nums[y]);
        reverse(nums.begin()+x+1, nums.end());
    }
};
```
# Foo
This the foo section we want to jump to

[Project Overview](./projectOverview.md)
![markdow cheat sheet](./Images/mkcs.png)
## option + command + v for pasting image
