---
title: Showing Tree DataStructures in terminal
date: January 29, 2022
description: Output of tree based structures like Binary Search Trees or Heaps in terminal with proper spacing and level ordering.
thumbnail: assets/shahadat-rahman-gnyA8vd3Otc-unsplash.jpg
tags: [c, cpp, ds, algo]
---

When working on college assignments involving tree data structures, one of the most challenging aspects is visualizing the tree in the console. While trees are easy to draw on paper, representing them properly in a terminal requires careful calculation of spacing and positioning. In this post, I'll walk you through the approach I used to print trees with proper level ordering and spacing.

## The Challenge

Trees are hierarchical structures, and displaying them in a 2D console requires us to think about:

- How much horizontal space each node needs
- How to center parent nodes above their children
- How to maintain consistent spacing across levels
- How to handle different tree heights

## Understanding the Spacing Pattern

The key insight is that spacing follows a geometric pattern based on the tree level. For a balanced binary tree:

- **Level 1** (root): 16 spaces from edges
- **Level 2**: 8 spaces between nodes
- **Level 3**: 4 spaces between nodes
- **Level 4**: 2 spaces between nodes
- **Level 5**: 1 space between nodes

Notice the pattern? Each level has half the spacing of the previous level. This makes sense because each level has twice as many nodes as the one above it.

![Representation of Tree DataStructure](/assets/tree.png "Tree DataStructure")

## The Algorithm

Here's the approach I used for printing trees in the console:

### Step 1: Calculate Tree Height

First, we need to know the height of the tree to determine the initial spacing:

```c
int getHeight(Node* root) {
    if (root == NULL) return 0;
    int leftHeight = getHeight(root->left);
    int rightHeight = getHeight(root->right);
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}
```

### Step 2: Level Order Traversal with Spacing

We use a queue-based level order traversal, but instead of just printing values, we calculate and print appropriate spacing:

```c
void printTree(Node* root) {
    if (root == NULL) return;
    
    int height = getHeight(root);
    int maxWidth = pow(2, height) - 1;
    
    Queue* queue = createQueue();
    enqueue(queue, root);
    
    int level = 0;
    
    while (!isEmpty(queue)) {
        int levelNodes = pow(2, level);
        int spacing = maxWidth / pow(2, level + 1);
        int betweenSpacing = maxWidth / pow(2, level);
        
        // Print initial spacing
        printSpaces(spacing);
        
        for (int i = 0; i < levelNodes; i++) {
            Node* current = dequeue(queue);
            
            if (current != NULL) {
                printf("%d", current->data);
                enqueue(queue, current->left);
                enqueue(queue, current->right);
            } else {
                printf(" ");
                enqueue(queue, NULL);
                enqueue(queue, NULL);
            }
            
            if (i < levelNodes - 1) {
                printSpaces(betweenSpacing);
            }
        }
        
        printf("\n");
        level++;
        
        if (level >= height) break;
    }
}
```

### Step 3: Helper Function for Spacing

```c
void printSpaces(int count) {
    for (int i = 0; i < count; i++) {
        printf(" ");
    }
}
```

## Practical Example

Let's say we have a Binary Search Tree with values: 50, 30, 70, 20, 40, 60, 80

The output would look like:

```
       50
   30      70
 20  40  60  80
```

The spacing calculation for this 3-level tree:
- Level 1: 7 spaces before root
- Level 2: 3 spaces before first node, 5 spaces between nodes
- Level 3: 1 space before first node, 2 spaces between nodes

## Handling Different Tree Types

### Binary Search Trees

BSTs maintain sorted order, making them perfect for this visualization since the structure naturally shows the ordering property.

### Heaps

For heaps (min-heap or max-heap), this visualization helps verify the heap property at each level. Parent nodes should be smaller (min-heap) or larger (max-heap) than their children.

### General Binary Trees

The same approach works for any binary tree structure, though unbalanced trees might look skewed.

## Optimization Tips

1. **Pre-calculate spacing**: Store spacing values in an array to avoid repeated calculations
2. **Use string buffers**: Build each level as a string before printing to avoid multiple print calls
3. **Handle NULL nodes**: Print spaces for NULL nodes to maintain structure
4. **Limit tree height**: For very tall trees, consider printing only a subset of levels

## Common Pitfalls

- **Off-by-one errors**: Spacing calculations are tricky; test with trees of different heights
- **Integer overflow**: For very tall trees, `pow(2, height)` can overflow
- **Memory leaks**: Remember to free queue memory after printing
- **Character width**: Assumes single-digit values; multi-digit numbers need adjustment

## Conclusion

Visualizing tree structures in the console is a valuable skill for debugging and understanding tree algorithms. While the spacing calculations can be complex, following the geometric pattern of halving spaces at each level provides a clean and readable output.

This approach helped me debug countless tree implementations during my data structures course, and I hope it helps you too. The key is understanding that tree visualization is all about managing spacing proportional to the tree's height and level.

Have you found other creative ways to visualize trees in the console? I'd love to hear about your approaches!