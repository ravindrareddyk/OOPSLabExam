import re

def get_block(text, start_marker, end_marker):
    start_idx = text.find(start_marker)
    if start_idx == -1: return ""
    # Find the end_marker *after* the start_idx
    end_idx = text.find(end_marker, start_idx)
    if end_idx == -1: return ""
    end_idx += len(end_marker)
    return text[start_idx:end_idx]

# 1. Read script.js which has the correct newest data
with open("script.js", "r", encoding="utf-8") as f:
    script_txt = f.read()

# Extract the new validUsers. In script.js it's the second occurrence (the first is commented)
# Let's just find the exact one that starts with N230245
users_start = script_txt.find('const validUsers = {\n\n  "N23')
users_end = script_txt.find('};', users_start) + 2
active_users = script_txt[users_start:users_end]

# Extract the new questions. Starts with 🔹 ARRAYS
q_start = script_txt.find('const questions = [\n\n  // 🔹 ARRAYS')
q_end = script_txt.find('];', q_start) + 2
active_qs = script_txt[q_start:q_end]

# Extract the new questionAssignments
qa_start = script_txt.find('const questionAssignments = {')
qa_end = script_txt.find('};', qa_start) + 2
active_qa = script_txt[qa_start:qa_end]

print("Found validUsers length:", len(active_users))
print("Found questions length:", len(active_qs))
print("Found qa length:", len(active_qa))

# 2. Read the clean original index.html
with open("index_clean.html", "r", encoding="utf-8") as f:
    idx_txt = f.read()

# Replace the block from const validUsers = { to };
# Be careful because there's only one validUsers in index_clean.html
old_u_start = idx_txt.find('    const validUsers = {')
old_u_end = idx_txt.find('    };', old_u_start) + 6

old_q_start = idx_txt.find('const questions = [')
old_q_end = idx_txt.find('];', old_q_start) + 2

old_qa_start = idx_txt.find('    const questionAssignments = {')
old_qa_end = idx_txt.find('    };', old_qa_start) + 6

if old_u_start != -1 and old_q_start != -1 and old_qa_start != -1:
    # We replace from end to beginning to not mess up indices
    idx_txt = idx_txt[:old_qa_start] + active_qa + idx_txt[old_qa_end:]
    idx_txt = idx_txt[:old_q_start] + active_qs + idx_txt[old_q_end:]
    idx_txt = idx_txt[:old_u_start] + active_users + idx_txt[old_u_end:]

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(idx_txt)
    print("Successfully rebuilt index.html")
else:
    print("Failed to find old sections in index_clean.html")
