# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
#     def hasCycle(self, head: Optional[ListNode]) -> bool:
        
#         if head == None or head.next == None:
#             return False
        
#         dict = {}
#         curr_node = head
#         next_node = head.next
#         while(next_node):
#             if id(next_node) in dict:
#                 return True
            
#             dict[id(curr_node)] = True
#             curr_node = curr_node.next
#             next_node = curr_node.next
            
#         return False
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        
        if head == None or head.next == None:
            return False
        
        slow = head
        fast = head
        while(fast and fast.next):
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast :
                return True
            
            
        return False
        
